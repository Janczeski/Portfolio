import { useColorMode } from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import React, { useState } from "react";
import { ReactNode } from 'react';
import {
  Box, Flex, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider,
  useDisclosure, useColorModeValue, Stack, Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Sobre', 'Projetos', 'Contato'];

const NavLink = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    onClick={onClick}
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
      onClose();
    }
  }

  
  return (
    <>
      <Box w='100%' bg={useColorModeValue('gray.200', 'gray.900')} position={'fixed'} zIndex={1}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'} marginRight={'4vw'} marginLeft={'3vw'} >
          <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
          />
          
          <HStack justifyContent={'right'} w='95%'>
            
            <HStack fontSize={'2vh'} as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>

              <NavLink onClick={() => handleClickScroll('Sobre')}>
                Sobre
              </NavLink>

              <NavLink onClick={() => handleClickScroll('Projetos')}>
                Projetos
              </NavLink>

              <NavLink onClick={() => handleClickScroll('Contato')}>
                Contato
              </NavLink>

            </HStack>
          </HStack>

          
          <Flex alignItems={'center'}>
            <div onClick={() => { toggleColorMode(); setIsActive(!isActive) }}>
              {isActive ? <MdLightMode size={'20'} /> : <MdDarkMode size={'20'} />}
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
                <NavLink key={link} onClick={() => handleClickScroll(link)}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
