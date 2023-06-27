import { Stack, Image, Flex, Text, useColorModeValue, } from "@chakra-ui/react";


export default function Projects(){    
    return(
        
        
        <Stack minH={'50vh'} direction={{ base: 'column', md: 'column' }} marginBottom={'10vh'} id='Projetos'>
            <Flex p={5} flex={1} justify={'center'}>
                <Stack spacing={2} w={'full'} maxW={'90vh'}>
                        <Text fontSize={{ base: 'md', lg: '3xl'}} color={'blue.400'} as='b'>
                            Meus projetos
                        </Text>
                        <Text fontSize={{ base: 'md', lg: '2xl' }} color={useColorModeValue('gray.700', 'gray.100')} >
                            Cada projeto é uma peça unica de desenvolvimento.
                        </Text>
                </Stack>
            </Flex>

            <Stack direction={{ base: 'column', md: 'row' }}>
                <Flex flex={1} align={'center'} justify={'right'}>
                    <Stack spacing={5} w={'full'} maxW={'60vh'}>
                        <Image
                            
                            src="/images/light_portfolio2.jfif"
                            alt="Perfil"
                        />
                    </Stack>
                </Flex>
                <Flex p={5} flex={1} justify={'left'}>
                    <Stack w={'full'} maxW={'60vh'}>
                        <Text fontSize={{ base: 'md', lg: '3xl'}} color={'blue.400'} as='b'>
                            Meu Portfólio
                        </Text>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={useColorModeValue('gray.700', 'gray.100')} >
                            Este é meu primeiro projeto desenvolvido, ele se refere ao meu portifólio, que é onde estamos no momento,
                            foi desenvolvido em Flutter com Chakra UI e aqui estarão presentes todos meus projetos futuros.
                        </Text>
                    </Stack>
                </Flex>      
            </Stack>
        </Stack>            
    )
}