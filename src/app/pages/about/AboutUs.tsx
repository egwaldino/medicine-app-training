import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

export const AboutUs = () => {
  return (
    <Container h={"100vh"} maxW="100%" p="50px 250px" bg={"#fff"}>
      <VStack align="stretch" gap={8}>
        <Box>
          <Heading as="h1" size="2xl" mb={2} color="#5759AF">
            Nossa História
          </Heading>
        </Box>
        <Text fontSize="xl" color="gray.700" w={"80%"}>
         Brevemente Disponível
        </Text>
      </VStack>
    </Container>
  );
};
