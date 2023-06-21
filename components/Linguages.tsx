import { Stack, Flex, Text, useColorModeValue, Box, Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


export default function Linguages(){
  return(
      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} bg={useColorModeValue('gray.100', 'gray.700')}>
        <Flex p={5} flex={1} alignItems={'center'} justify={'center'}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={12} color={useColorModeValue('gray.900', 'gray.800')}>
            <Stack borderRightWidth={'3px'} borderColor={useColorModeValue('gray.300', 'gray.800')}>
              <Text fontSize={'2vh'} marginRight={'3vh'} color={useColorModeValue('gray.800', 'gray.100')}>
                Tech Stack     
              </Text>
            </Stack>

            <Container display="flex">
              <ChakraBox 
                animate={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  borderRadius: ["50%", "50%", "50%", "50%", "50%"],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                shadow={'dark-lg'}
                rounded='md' 
                padding="2"
                bgGradient="linear(to-l, #FFFF, #FFFF)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="7vh"
                height="7vh"
              >
              <FaJsSquare size={'40'}/>
              </ChakraBox>
            </Container>
            
            <Container display="flex">
              <ChakraBox 
                animate={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  borderRadius: ["50%", "50%", "50%", "50%", "50%"],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                shadow={'dark-lg'}
                rounded='md' 
                bg='white'
                padding="2"
                bgGradient="linear(to-l, #FFFF, #FFFF)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="7vh"
                height="7vh"
              >
              <SiFlutter size={'40'}/>
              </ChakraBox>
            </Container>

            <Container display="flex">
              <ChakraBox 
                animate={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  borderRadius: ["50%", "50%", "50%", "50%", "50%"],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                shadow={'dark-lg'}
                rounded='md' 
                bg='white'
                padding="2"
                bgGradient="linear(to-l, #FFFF, #FFFF)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="7vh"
                height="7vh"
              >
              <FaNodeJs size={'40'}/>
              </ChakraBox>
            </Container>

            <Container display="flex">
              <ChakraBox 
                animate={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  borderRadius: ["50%", "50%", "50%", "50%", "50%"],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                shadow={'dark-lg'}
                rounded='md' 
                bg='white'
                padding="2"
                bgGradient="linear(to-l, #FFFF, #FFFF)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="7vh"
                height="7vh"
              >
              <FaReact size={'40'}/>
              </ChakraBox>
            </Container>
            
            
          </Stack>
        </Flex>  
      </Stack>
  )

}

