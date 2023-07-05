import { Stack, Flex, Text, useColorModeValue, Container, Box } from "@chakra-ui/react";
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiFlutter, SiChakraui } from "react-icons/si";

export default function Linguages(){
  return(
      <Stack minH={'10vh'} direction={{ base: 'column', md: 'column' }} bg={useColorModeValue('gray.100', 'gray.700')}>
        <Flex p={5} flex={1} alignItems={'center'} justify={'center'} >
          <Stack direction={{ base: 'row', md: 'row' }} spacing={[0,2,4,8,12,16]} color={useColorModeValue('gray.900', 'gray.800')} marginBottom={'5vh'}>
            <Stack borderRightWidth={'3px'} borderColor={useColorModeValue('gray.300', 'gray.800')}  justify={'center'}>
              <Text fontSize={['12px','18px']} marginRight={['1vh','2vh','3vh']} color={useColorModeValue('gray.800', 'gray.100')} minW={'10vh'}>
                Tech Stack     
              </Text>
            </Stack>

            <Container display="flex" >
              <Box   
                shadow={'dark-lg'}
                borderRadius={"full"}
                padding="2"
                bgColor={'whiteAlpha.900'}
                display="flex"
                justifyContent="center"
                alignItems="center"

                width={['4vh', '5vh', '6vh', '7vh']}
                height={['4vh', '5vh', '6vh', '7vh']}                
              >
                <FaJsSquare size={'40'}/>
              </Box>
            </Container>

            <Container display="flex">
              <Box
                shadow={'dark-lg'}
                borderRadius={"full"}
                padding="2"
                bgColor={'whiteAlpha.900'}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={['4vh', '5vh', '6vh', '7vh']}
                height={['4vh', '5vh', '6vh', '7vh']}    
              >
                <SiFlutter size={'40'}/>
              </Box>
            </Container>  

            <Container display="flex">
              <Box   
                shadow={'dark-lg'}
                borderRadius={"full"}
                padding="2"
                bgColor={'whiteAlpha.900'}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={['4vh', '5vh', '6vh', '7vh']}
                height={['4vh', '5vh', '6vh', '7vh']}   
              >
                <FaNodeJs size={'40'}/>
              </Box>
            </Container>

            <Container display="flex">
              <Box   
                shadow={'dark-lg'}
                borderRadius={"full"}
                padding="2"
                bgColor={'whiteAlpha.900'}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={['4vh', '5vh', '6vh', '7vh']}
                height={['4vh', '5vh', '6vh', '7vh']}   
              >
                <FaReact size={'40'}/>
              </Box>
            </Container>
            <Container display="flex">
              <Box   
                shadow={'dark-lg'}
                borderRadius={"full"}
                padding="2"
                bgColor={'whiteAlpha.900'}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={['4vh', '5vh', '6vh', '7vh']}
                height={['4vh', '5vh', '6vh', '7vh']}   
              >
                <SiChakraui size={'50'}/>
              </Box>
            </Container>
          </Stack>
        </Flex>  
      </Stack>
  )

}

