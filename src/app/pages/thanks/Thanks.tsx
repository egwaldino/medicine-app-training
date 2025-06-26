import {
  Heading,
  Text,
  VStack,
  Container,
  Image,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import iconFacebook from "../../../assets/iconFacebook.svg";
import iconWhatsapp from "../../../assets/iconWhatsapp.svg";
import iconTelefone from "../../../assets/iconTelefone.svg";
import iconInstagram from "../../../assets/iconInstagram.svg";

import RunningPerson from "../../../assets/RunningPerson.png";

export const Thanks = () => {
  return (
    <Container
      h={"100vh"}
      maxW="100%"
      p="50px 250px"
      bg="linear-gradient(180deg, #4A4DA5, #5A75D8)"
    >
      <VStack align="stretch" gap={8}>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir={"column"}
          gap={4}
        >
          <Heading
            as="h1"
            fontWeight={"extrabold"}
            textAlign={"center"}
            size="3xl"
            color="white"
          >
            Health Care
          </Heading>
          <Image src={RunningPerson} alt="Pessoa correndo" boxSize="250px" />
        </Flex>
        <Flex
          flexDir={"column"}
          gap={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading as="h2" size="3xl" color="white" fontWeight={"bold"}>
            Obrigado pelo seu contato!
          </Heading>
          <Text fontSize="md" textAlign={"center"} color="white" w={"70%"}>
            Recebemos a sua mensagem com sucesso. Em breve, a nossa equipa
            entrará em contacto para prestar o melhor atendimento possível.
            Agradecemos pela confiança e preferência. Estamos à disposição para
            cuidar de si com toda a atenção que merece.
          </Text>
          <Flex
          mt={"40px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"43%"}
          >
            <Text fontSize="sm" color="white">
              #seguehealthcare
            </Text>
            <Flex>
              <IconButton bg="none" disabled aria-label="Facebook">
                <Image width={"20px"} height={"20px"} src={iconFacebook} />
              </IconButton>

              <IconButton bg="none" disabled aria-label="Instagram">
                <Image width={"20px"} height={"20px"} src={iconInstagram} />
              </IconButton>

              <IconButton bg="none" disabled aria-label="Whatsapp">
                <Image width={"20px"} height={"20px"} src={iconWhatsapp} />
              </IconButton>

              <IconButton bg="none" disabled aria-label="Telefone">
                <Image width={"20px"} height={"20px"} src={iconTelefone} />
              </IconButton>
            </Flex>
          </Flex>
        </Flex>
      </VStack>
    </Container>
  );
};
