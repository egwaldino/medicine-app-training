import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

export const Schedule = () => {
  return (
    <Container maxW="100%" p="50px 250px" bg="#fff" h="100vh">
      <VStack align="stretch" gap={8}>
        <Box>
          <Heading as="h1" size="2xl" mb={2} color="#5759AF">
            Fazer Agendamento
          </Heading>
        </Box>
        <Text fontSize="xl" color="gray.700" w={"80%"}>
          Brevemente Disponível
        </Text>
      </VStack>
    </Container>
  );
};
