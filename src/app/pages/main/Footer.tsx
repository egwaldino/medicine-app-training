import { Flex, Box, Text, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex mt="70px" p={"15px 150px"} justifyContent={"space-between"} w="100%">
      <Box>
        <Text mb="30px" fontWeight={"bold"} color="#363B8F">
          Health Care
        </Text>
        <Text>Copyright © 2025 Health Care • Todos os direitos reservados</Text>
      </Box>

      <Flex w="400px" mr="140px" gap="10" justifyContent={"space-between"}>
        <Box>
          <Text mb="20px" fontWeight={"bold"} color="#363B8F">
            Health Care
          </Text>
          <Link href="..." color="#000000" mb="20px">
            Termos e Condições
          </Link>
          <Link href="..." color="#000000" mb="20px">
            Politica de Privacidade
          </Link>
        </Box>
        <Flex direction={"column"} w="200px">
          <Text fontWeight={"bold"} mb="20px" color="#363B8F">
            Sobre
          </Text>
          <Link href="..." color="#000000" mb="20px">
            Nossa História
          </Link>
          <Link href="..." color="#000000" mb="20px">
            Benefícios
          </Link>
          <Link href="..." color="#000000">
            Equipe
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
