import { Flex, Stack, Image, Heading, Text, useColorModeValue, useClipboard, Box, useBreakpointValue,} from "@chakra-ui/react";
import { AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

import {MdOutlineEmail } from "react-icons/md";
import { useToast } from '@chakra-ui/react'
import ContactButton from "./ContactButton";
import React from "react";

export default function Contact(){
    const { onCopy} = useClipboard("vinicius.zanquini.janczeski@gmail.com");
    const toast = useToast()
    const minh = useBreakpointValue({ base: '10vh', md: '95vh' });
    const paddingtop = useBreakpointValue({ base: '10vh', md: '20vh' });
    const paddingleft = useBreakpointValue({ base: '5vh', md: '2vh'});
    const paddingright = useBreakpointValue({ base: '5vh', md: '2vh'});
    const paddingbottom = useBreakpointValue({ base: '2vh', md: '2vh'});


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
        
        
        <Flex minH={minh} justifyContent="center" bg={useColorModeValue('gray.100', 'gray.700')} id="Contato" direction={{ base: 'column', md: 'row' }} paddingTop={paddingtop}>
                <Flex>
                    <Stack maxW={'60vh'}  paddingLeft={paddingleft} paddingRight={paddingright} paddingBottom={paddingbottom}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text as={'span'}>
                                Contate-me
                            </Text>
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={useColorModeValue('gray.900', 'gray.100')} >
                            Se gostou do meu trabalho e deseja se comunicar comigo, fique à vontade para me mandar uma mensagem!
                        </Text>
                        <ContactButton text='Whatsapp' icon={<AiOutlineWhatsApp size={40}/>} onClick={() => window.open('https://api.whatsapp.com/send?phone=5567998812814')}/>
                        <ContactButton text='Linkedin' icon={<AiOutlineLinkedin size={40}/>} onClick={() => window.open('https://www.linkedin.com/in/vinicius-zanquini-janczeski-3171b5141')}/>
                        <Box  onClick={onCopy}>
                        <ContactButton text='E-Mail' icon={<MdOutlineEmail size={40}/>} onClick={() => copyShow()}/>
                        </Box>
                    </Stack>
                </Flex>
                
                <Flex>
                    <Stack spacing={5} w={'full'} marginBottom={'20vh'} marginLeft={[0, 10, 20, 30, 40]} align={'center'}>
                        <Image
                        
                        borderRadius={'50%'}
                        shadow={'dark-lg'}
                        maxH={['30vh', '40vh']}
                        maxW={['30vh', '40vh']}
                        src="/images/contactphoto2.jpg"
                        alt="Perfil"
                        />
                    </Stack>
                </Flex>
        </Flex>
    )
}


