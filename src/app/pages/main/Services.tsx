import { Box, Image, Text } from "@chakra-ui/react";
import ImageServices from "../../../assets/Vector.png";

export const Services = () => {
  return (
    <Box position={"relative"} mt={"80"} id="services">
      <Image src={ImageServices} />
      <Box
        position="absolute"
        top="180px"
        right="450px"
        width="500px"
        height="500px"
        borderRadius="full"
        bg="#5759AF"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        zIndex="1000"
      >
        <Text fontWeight="bold" fontSize={"60px"}>
          SERVIÇOS
        </Text>
      </Box>

      <Box
        position="absolute"
        top="20px"
        right="90px"
        width="350px"
        height="350px"
        borderRadius="full"
        bg="#5759AF"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        zIndex="1000"
      >
        <Text fontWeight="bold" fontSize={"40px"} textAlign={"center"}>
          Cuidados de Enfermagem
        </Text>
      </Box>

      <Box
        position="absolute"
        top="490px"
        right="980px"
        width="350px"
        height="350px"
        borderRadius="full"
        bg="#5759AF"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        zIndex="1000"
      >
        <Text fontWeight="bold" fontSize={"40px"} textAlign={"center"}>
          Cuidados de Idosos
        </Text>
      </Box>

      <Box
        position="absolute"
        top="70px"
        right="930px"
        width="250px"
        height="250px"
        borderRadius="full"
        bg="#ffffff"
        color="#5759AF"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        zIndex="1000"
      >
        <Text fontWeight="semibold" fontSize={"30px"} textAlign={"center"}>
          Colheitas de amostras
        </Text>
      </Box>

      <Box
        position="absolute"
        top="600px"
        right="250px"
        width="200px"
        height="200px"
        borderRadius="full"
        bg="#ffffff"
        color="#5759AF"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        zIndex="1000"
      >
        <Text fontWeight="semibold" fontSize={"22px"} textAlign={"center"}>
          Administração de medicamentos
        </Text>
      </Box>
    </Box>
  );
};
