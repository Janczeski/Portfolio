import {
  Box,
  Container,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center'}}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2002 All rights reserved</Text>
      </Container>
    </Box>
  );
}