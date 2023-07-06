import { Stack, Flex, Text, useColorModeValue, Container, Box, useMediaQuery,  } from "@chakra-ui/react";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { SiFlutter, SiTsnode , SiChakraui } from "react-icons/si";
import IconsTech from "./IconsTech";

export default function Linguages(){
  const [isWideScreen] = useMediaQuery("(min-width: 768px)");
  return(
      
      <Stack minH={'10vh'} direction={{ base: 'column', md: 'column' }} bg={useColorModeValue('gray.100', 'gray.700')}>
        <Flex
          p={5}
          direction={['column', 'row']}
          alignItems="center"
          justify="center"
          flexWrap={['nowrap', 'wrap']}
        >
          {/* Conditionally render the Tech Stack text and border */}
          {isWideScreen ? (
            <Stack borderRightWidth={'2px'} borderColor={useColorModeValue('gray.300', 'gray.800')}>
              <Text fontSize={{base: 'md', lg: '3xl'}} marginRight={['1vh', '2vh', '3vh']} color={useColorModeValue('gray.800', 'gray.100')} minW={'10vh'} align={'center'}>
                Tech Stack
              </Text>
            </Stack>
          ) : (
            <Flex w="100%" justifyContent="center">
              <Stack borderBottomWidth={'2px'} borderColor={useColorModeValue('gray.300', 'gray.800')}>
                <Text fontSize={{base: 'md', lg: '2xl'}} color={useColorModeValue('gray.800', 'gray.100')} align={'center'}>
                  Tech Stack
                </Text>
              </Stack>
            </Flex>
          )}

          <Flex flexWrap="wrap" p={5}>
            <Box marginRight={['4', '8', '12', '16', '20']}>
              <IconsTech icon={<FaJsSquare size={'40'}/>}/>
            </Box>
            <Box marginRight={['4', '8', '12', '16', '20']}>
              <IconsTech icon={<SiFlutter size={'40'}/>}/>
            </Box>
            <Box marginRight={['4', '8', '12', '16', '20']}>
              <IconsTech icon={<SiTsnode size={'40'}/>}/>
            </Box>
            <Box marginRight={['4', '8', '12', '16', '20']}>
              <IconsTech icon={<FaReact size={'40'}/>}/>
            </Box>
            <Box marginRight={['4', '8', '12', '16', '20']}>
              <IconsTech icon={<SiChakraui size={'50'}/>}/>
            </Box>
          </Flex>
        </Flex>
      </Stack>
  );
};

/*<Stack minH={'10vh'} direction={{ base: 'column', md: 'column' }} bg={useColorModeValue('gray.100', 'gray.700')}>
        <Flex p={5} flex={1} alignItems={'center'} justify={'center'} display={'flex'} flexWrap={'wrap'}>
          <Stack direction={{ base: 'row', md: 'row' }} spacing={[0,2,4,8,12,16]} color={useColorModeValue('gray.900', 'gray.800')} marginBottom={'5vh'}>
           
            <Stack borderRightWidth={'3px'} borderColor={useColorModeValue('gray.300', 'gray.800')}  justify={'center'}>
              <Text fontSize={['12px','18px']} marginRight={['1vh','2vh','3vh']} color={useColorModeValue('gray.800', 'gray.100')} minW={'10vh'}>
                Tech Stack     
              </Text>
            </Stack>

            <IconsTech icon={<FaJsSquare size={'40'}/>}/>

             <IconsTech icon={<SiFlutter size={'40'}/>}/>

             <IconsTech icon={<SiTsnode size={'40'}/>}/>

             <IconsTech icon={<FaReact size={'40'}/>}/>

             <IconsTech icon={<SiChakraui size={'50'}/>}/>
        
          </Stack>
        </Flex>  
      </Stack>*/