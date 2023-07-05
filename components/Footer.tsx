import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box minH={'10vh'} bg={useColorModeValue('gray.200', 'gray.700')}>
      <Container
        as={Stack}
        spacing={0}
        justify={{ base: 'center'}}
        align={{ base: 'center', md: 'center' }}>
        <Text>Website made by Vinicius Z. Janczeski </Text>
        <Text>© 2023 All rights reserved</Text>
      </Container>
    </Box>
  );
} 