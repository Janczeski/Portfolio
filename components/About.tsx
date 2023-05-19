import { Stack, Heading, useBreakpointValue, Flex, Text, Image } from "@chakra-ui/react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function About(){

    return(
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} id='Sobre'>
            <Flex p={5} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={9} w={'full'} maxW={'70vh'}>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: useBreakpointValue({ base: '20%', md: '30%' }),
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'blue.400',
                        zIndex: -1,
                    }}>
                    Vinicius Zanquini Janczeski
                    </Text>
                    <br />
                    <Text color={'blue.400'} as={'span'}>
                    Desenvolvedor Web
                    </Text>
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                    Desenvolvedor Full Stack, tecnólogo em Informática para Internet pelo Instito Federal (IFMS), 
                    cursando Sistema de Informação na Universidade da Grande Dourados (UFGD), estou em busca de oportunidades no mercado de trabalho.
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <div onClick={() => window.open('https://www.linkedin.com/in/vinicius-zanquini-janczeski-3171b5141')}>
                    <FaLinkedin size={'40'}/>
                    </div>
                    <div onClick={() => window.open('https://github.com/Janczeski')}>
                    <FaGithub size={'40'}/>
                    </div>
                </Stack>
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