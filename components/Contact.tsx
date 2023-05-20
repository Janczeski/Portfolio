import { WarningTwoIcon } from "@chakra-ui/icons";
import { Flex, Stack, Image } from "@chakra-ui/react";

export default function Contact(){
    return(
        <Stack minH={'90vh'} id="Contato">
            <Flex flex={1} align={'center'} justify={'center'} fontSize={'10vh'}>
                <h1>The Page Contact is in Maintenance</h1>
            </Flex>
            <Flex flex={1} align={'center'} justify={'center'}>
                <WarningTwoIcon w={80} h={80} color="red.500" />
            </Flex>
        </Stack>
    )
}