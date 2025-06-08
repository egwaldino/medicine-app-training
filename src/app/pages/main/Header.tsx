import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import Banner from "../../../assets/Banner.png";
import IconBanner from "../../../assets/Group 99.png";

export const Header = () => {
  return (
    <Box position={"relative"}>
      <Flex
        px={"8"}
        py={"4"}
        top={"0"}
        left={"0"}
        width={"100%"}
        color={"white"}
        p={"15px 150px"}
        position={"absolute"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Button color={"white"} size={"xl"} variant="plain">
          Health Care
        </Button>

        <HStack>
          <Button
            color={"white"}
            size={"lg"}
            variant="plain"
            onClick={() => {
              const section = document.getElementById("benefits");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Benefícios
          </Button>
          <Button
            color={"white"}
            size={"lg"}
            variant="plain"
            onClick={() => {
              const section = document.getElementById("services");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Serviços
          </Button>
          <Button
            color={"white"}
            size={"lg"}
            variant="plain"
            onClick={() => {
              const section = document.getElementById("faqs");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            FAQs
          </Button>
          <Button
            color={"white"}
            size={"lg"}
            variant="plain"
            onClick={() => {
              const section = document.getElementById("contacts");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contactos
          </Button>
          <Button borderRadius={"full"} asChild>
            <a href="/pagina-agendamento">Agendar</a>
          </Button>
        </HStack>
      </Flex>

      <Image
        src={Banner}
        alt="Banner"
        width={"100%"}
        height={"100%"}
        objectFit={"cover"}
      />
      <VStack position={"absolute"} top={"150px"} left={"170px"}>
        <Text
          marginBottom={"-80px"}
          color={"white"}
          fontSize={"100px"}
          fontWeight={"extrabold"}
        >
          Medicina
        </Text>
        <Text
          marginBottom={"-35px"}
          color={"white"}
          fontSize={"140px"}
          fontWeight={"extralight"}
        >
          Domiciliar
        </Text>
        <Text
          color={"white"}
          fontSize={"20px"}
          fontWeight={"light"}
          letterSpacing="3px"
        >
          Bem estar ao seu alcance
        </Text>
      </VStack>
      <Image
        src={IconBanner}
        alt="Icon do banner"
        position={"absolute"}
        top={"210px"}
        right={"100px"}
        width={"561.85px"}
        height={"433.56px"}
      />
    </Box>
  );
};
