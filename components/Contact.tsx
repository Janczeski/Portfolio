import { Flex, Stack, Image, Heading, useBreakpointValue, Text, useColorModeValue, Button, } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import {MdOutlineEmail } from "react-icons/md";
import { useToast } from '@chakra-ui/react'
import { useClipboard } from '@chakra-ui/react'
import ContactButton from "./ContactButton";
import React from "react";

export default function Contact(){

    const toast = useToast()

    function copyShow() {
        toast({
        title: 'E-mail Copiado.',
        description: "Copiamos o e-mail para sua área de transferênia!",
        status: 'success',
        duration: 9000,
        isClosable: true,
        })
    }

    return(
        <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }} id="Contato" bg={useColorModeValue('gray.100', 'gray.700')}> 
            <Flex p={5} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={9} w={'full'} maxW={'70vh'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text as={'span'}>
                            Contate-me
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={useColorModeValue('gray.900', 'gray.100')} >
                        Se gostou do meu trabalho e deseja se comunicar comigo, fique à vontade para me mandar uma mensagem!
                    </Text>
                    <ContactButton text='Whatsapp' icon={<AiOutlineWhatsApp size={40}/>} onClick={() => window.open('https://api.whatsapp.com/send?phone=5567998812814')}/>
                    <ContactButton text='Instagram' icon={<AiOutlineInstagram size={40}/>} onClick={() => window.open('https://www.instagram.com/janczeski_/')}/>
                    <ContactButton text='E-Mail' icon={<MdOutlineEmail size={40}/>} onClick={() => copyShow()}/>
                </Stack>
            </Flex>          
            <Flex flex={1} align={'center'} justify={'center'}>
                <Stack spacing={5} w={'full'} maxW={'60vh'}>
                    <Image
                        src="/images/iconperfil.jpg"
                        alt="Perfil"
                    />
                </Stack>
            </Flex>
        </Stack>
    )
}