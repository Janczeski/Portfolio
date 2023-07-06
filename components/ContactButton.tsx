import { Button, Stack, useClipboard } from "@chakra-ui/react"
import React, { ReactElement } from "react"


interface IContactButtonProps{
    text: string
    icon: ReactElement
    onClick: Function

}

export default function ContactButton({text, icon, onClick}: IContactButtonProps){
    const { onCopy} = useClipboard("vinicius.zanquini.janczeski@gmail.com");
    return(
        <Stack direction={{ base: 'row', md: 'row' }} maxW={'80vh'} align={'center'} onClick={onCopy}>
            <Button
                onClick={() => onClick()}
                leftIcon={icon} 
                bg={"transparent"} 
                _hover={{
                textDecoration: 'none',
                bg: 'transparent',
                
            }}>
                {text}
            </Button>                        
        </Stack>
    )
} 
 