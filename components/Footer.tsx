import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box minH={'5vh'} bg={useColorModeValue('gray.200', 'gray.700')}>
      <Container
        as={Stack}
        spacing={0}
        align={'center'}
        >
        <Text>Website made by Vinicius Z. Janczeski </Text>
        <Text>© 2023 All rights reserved</Text>
      </Container>
    </Box>
  );
} 