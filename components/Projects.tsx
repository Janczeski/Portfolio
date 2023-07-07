import { Stack, Image, Flex, Text, useColorModeValue, Box, Container, useBreakpointValue, } from "@chakra-ui/react";
import { SiChakraui, SiFlutter } from "react-icons/si";


export default function Projects(){
    const paddingtop = useBreakpointValue({ base: '4vh', md: '10vh' });
    const minh = useBreakpointValue({ base: '10vh', md: '60vh' });
    const marginbottom = useBreakpointValue({ base: '10vh', md: '40vh' });
    
    return(
        <Stack minH={minh} direction={{ base: 'column', md: 'column' }} marginBottom={marginbottom} id='Projetos'>
            <Flex p={5} flex={1} justify={'center'} align={'center'}>
                <Stack spacing={2} w={'full'} maxW={'90vh'}>
                    <Text fontSize={{ base: 'md', lg: '3xl'}} color={'blue.400'} as='b'>
                        Meus projetos
                    </Text>
                    <Text fontSize={{ base: 'md', lg: '2xl' }} color={useColorModeValue('gray.700', 'gray.100')} >
                        Cada projeto é uma peça única de desenvolvimento.
                    </Text>
                </Stack>
            </Flex>

            <Stack direction={{ base: 'column', md: 'row' }} paddingTop={paddingtop}>
                <Flex flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={5} w={'full'} maxW={'60vh'}>
                        <Image
                            shadow={'dark-lg'}
                            borderRadius={'5%'}
                            src="/images/portfolio.png"
                            alt="Perfil"
                        />
                    </Stack>
                </Flex>
                <Flex p={5} flex={1} justify={'left'} >
                    <Stack w={'full'} maxW={'60vh'}>
                        <Text fontSize={{ base: 'md', lg: '3xl'}} color={'blue.400'} as='b'>
                            Meu Portfólio
                        </Text>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={useColorModeValue('gray.700', 'gray.100')} >
                            Este é meu primeiro projeto desenvolvido, ele se refere ao meu portifólio, que é onde estamos no momento,
                            foi desenvolvido em Flutter com Chakra UI e aqui estarão presentes todos meus projetos futuros.
                        </Text>
                        <Container display="flex">
                            <Box   
                                shadow={'dark-lg'}
                                borderRadius={"full"}
                                padding="2"
                               
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                width={['4vh', '5vh', '6vh']}
                                height={['4vh', '5vh', '6vh']}
                                marginRight={'2vh'}
                            >
                                <SiFlutter size={'40'}/>
                            </Box>
                            <Box   
                                shadow={'dark-lg'}
                                borderRadius={"full"}
                                padding="2"
                                
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                width={['4vh', '5vh', '6vh']}
                                height={['4vh', '5vh', '6vh']}   
                            >
                                <SiChakraui size={'50'}/>
                            </Box>
                        </Container>

                    </Stack>
                </Flex>      
            </Stack>
        </Stack>            
    )
}