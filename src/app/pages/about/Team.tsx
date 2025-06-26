import { Box, Heading, Text, VStack, Container, Flex } from "@chakra-ui/react";
import { TeamCard } from "../../../components/TeamCard";

export const Team = () => {
  return (
    <Container
      bg="linear-gradient(180deg, #4A4DA5, #5A75D8)"
      h={"100vh"}
      maxW="100%"
      p="50px 250px"
    >
      <VStack align="stretch" gap={4}>
        <Box>
          <Heading as="h1" size="3xl" color="#fff" textAlign="center">
            Equipe Health Care
          </Heading>
        </Box>
        <Flex justifyContent={"center"} alignItems="center" flexDir="column" gap={8}>
          <Text fontSize="sm" color="#fff" w={"50%"} textAlign={"center"}>
            Nossa equipe é composta por profissionais altamente qualificados e
            dedicados a oferecer o melhor atendimento médico ao domicílio.
          </Text>
          <TeamCard />
        </Flex>
      </VStack>
    </Container>
  );
};
