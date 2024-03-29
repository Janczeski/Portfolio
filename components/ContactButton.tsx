import { Button, Stack } from "@chakra-ui/react"
import React, { ReactElement } from "react"


interface IContactButtonProps{
    text: string
    icon: ReactElement
    onClick: Function

}

export default function ContactButton({text, icon, onClick}: IContactButtonProps){
    
    return(
        <Stack direction={{ base: 'row', md: 'row' }} maxW={'80vh'} align={'center'}>
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
 