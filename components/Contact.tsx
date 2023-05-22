import { WarningTwoIcon } from "@chakra-ui/icons";
import { Flex, Stack, Image, Heading, IconButton, useBreakpointValue, Text, useColorModeValue, } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact(){
    return(
        <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }} id="Contato">
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
                    Contate-me
                    </Text>
                    <br />
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color={useColorModeValue('gray.900', 'gray.100')} >
                    Se gostou do meu trabalho e deseja se comunicar comigo, fique à vontade para me mandar uma mensagem!
                </Text>
                <Stack direction={{ base: 'column', md: 'column' }} spacing={4}>
                    <div onClick={() => window.open('https://www.linkedin.com/in/vinicius-zanquini-janczeski-3171b5141')}>
                        
                        <IconButton
                            boxSize='50px'
                            aria-label={""} 
                            border={'None'}
                            variant={"outline"}
                            fontSize='40px'
                            icon={<FaLinkedin/>}/>
                    </div>
                    <div onClick={() => window.open('https://github.com/Janczeski')}>
                        <IconButton
                            boxSize='50px'
                            aria-label={""}
                            border={'None'}
                            variant={"outline"}
                            fontSize='40px'
                            icon={<FaGithub/>}/>
                            
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
        /*<Stack minH={'90vh'} >
            <Flex flex={1} align={'center'} justify={'center'} fontSize={'10vh'}>
                <h1>The Page Contact is in Maintenance</h1>
            </Flex>
            <Flex flex={1} align={'center'} justify={'center'}>
                <WarningTwoIcon w={80} h={80} color="red.500" />
            </Flex>
        </Stack>*/