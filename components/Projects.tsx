import { WarningTwoIcon } from "@chakra-ui/icons";
import { Stack, Image, Flex } from "@chakra-ui/react";


export default function Projects(){
    return(
        <Stack minH={'90vh'} id="Projetos">
            <Flex flex={1} align={'center'} justify={'center'} fontSize={'10vh'}>
                <h1>The Page Projects is in Maintenance</h1>
            </Flex>
            <Flex flex={1} align={'center'} justify={'center'}>
                <WarningTwoIcon w={80} h={80} color="red.500" />
            </Flex>
        </Stack>
    )
}