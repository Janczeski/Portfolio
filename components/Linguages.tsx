import { Stack, Flex } from "@chakra-ui/react";
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export default function Linguages(){
  return(
      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={5} flex={1} alignItems={'center'} justify={'center'}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={12}>
            <FaJsSquare size={'40'}/>
            <SiFlutter size={'40'}/>
            <FaNodeJs size={'40'}/>
            <FaReact size={'40'}/>
          </Stack>
        </Flex>  
      </Stack>
  )

}

