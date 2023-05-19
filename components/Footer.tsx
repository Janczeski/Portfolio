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
        spacing={0}
        justify={{ base: 'center'}}
        align={{ base: 'center', md: 'center' }}>
        <Text>Website made by Vinicius Z. Janczeski </Text>
        <Text>© 2002 All rights reserved</Text>
      </Container>
    </Box>
  );
}