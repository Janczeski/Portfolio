import {Box } from '@chakra-ui/react';
import React from 'react';

export default function IconsTech({icon}){

    return(
        <Box
        
        shadow={'dark-lg'}
        borderRadius={"full"}
        padding="2"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={['5vh', '6vh', '7vh']}
        height={['5vh', '6vh', '7vh']}
        >
        {icon}
        </Box>
    );

}