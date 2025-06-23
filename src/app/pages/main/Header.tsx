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
import { useEffect, useState } from "react";
import IconBanner from "../../../assets/Group 99.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box position={"relative"}>
      <Flex
        px="8"
        py="4"
        width="100%"
        color="white"
        position={scrolled ? "fixed" : "absolute"}
        top="0"
        left="0"
        zIndex="1100"
        maxH="64px"
        transition="all 0.3s ease-in-out"
        bg={scrolled ? "rgba(87, 89, 175, 0.8)" : "none"}
        backdropFilter={scrolled ? "blur(8px)" : "none"}
        boxShadow={scrolled ? "md" : "none"}
        justifyContent="space-between"
        alignItems="center"
        padding="15px 150px"
      >
        <Button
          color={"white"}
          size={"xl"}
          variant="plain"
          onClick={() => {
            window.location.href = window.location.pathname;
          }}
        >
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
