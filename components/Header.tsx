import { useColorMode } from '@chakra-ui/react';
import {MdDarkMode, MdLightMode} from "react-icons/md"; 
import React, { useState } from "react";
import { ReactNode } from 'react';
import {
  Box, Flex, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, 
  useDisclosure, useColorModeValue, Stack, Text} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';

const Links = ['Sobre', 'Projetos', 'Contato'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    >
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode()
  const [isActive, setIsActive] = useState(false);

  const handleClickScroll = (option) => {
    const element = document.getElementById(option);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Box w='100%' bg={useColorModeValue('blackAlpha.100', 'blackAlpha.100')} position={'fixed'}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} marginRight={'1vw'}>
            <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
            />
          <HStack justifyContent={'right'} w='95%'>
            <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                  
                  <div onClick={() => handleClickScroll('Sobre')}>
                    <NavLink key='Sobre'>Sobre</NavLink>
                  </div>

                  <div onClick={() => handleClickScroll('Projetos')}> 
                    <NavLink key='Projetos' >Projetos</NavLink>
                  </div>

                  <div onClick={() => handleClickScroll('Contato')}>  
                    <NavLink key='Contato' >Contato</NavLink>
                  </div>

            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <div onClick={() => {toggleColorMode(); setIsActive(!isActive)}}>
                {isActive ? <MdLightMode/> : <MdDarkMode/>}
            </div>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}