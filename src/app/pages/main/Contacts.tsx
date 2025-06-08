import {
  Box,
  Flex,
  Stack,
  Field,
  Input,
  Textarea,
  Button,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import formImage from "../../../assets/formSession.png";
import iconFacebook from "../../../assets/iconFacebook.svg";
import iconInstagram from "../../../assets/iconInstagram.svg";
import iconWhatsapp from "../../../assets/iconWhatsapp.svg";
import iconTelefone from "../../../assets/iconTelefone.svg";

export const Contacts = () => {
  return (
    <Box position={"relative"} mt="20" maxW={"100%"} id="contacts">
      <Flex
        position="absolute"
        direction={"column"}
        top="20px"
        right="0px"
        px="8"
        py="4"
        color="white"
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"15px 150px"}
        w={"100wh"}
      >
        <Box mb={"40px"}>
          <Text fontWeight={"extrabold"} fontSize={"50px"}>
            Entrar em Contacto
          </Text>
          <Text fontWeight={"normal"} fontSize={"18px"}>
            Entre em contacto com a nossa equipe de medicina domiciliar
          </Text>
        </Box>
        <form action="https://formsubmit.co/ecassuente@gmail.com" method="POST">
          <Stack>
            <Field.Root gap={"10px"}>
              <Field.Label>NOME COMPLETO</Field.Label>
              <Input
                name="fullName"
                p={"20px"}
                w={"500px"}
                mb={"30px"}
                type={"name"}
                fontSize={"lg"}
                border={"1px solid white"}
                placeholder={"João Pedro Domingos"}
                required
              />
               <Field.Label>TELEFONE</Field.Label>
              <Input
                name="phoneNumber"
                p={"20px"}
                w={"500px"}
                mb={"30px"}
                type={"tel"}
                fontSize={"lg"}
                border={"1px solid white"}
                placeholder={"+244 999 888 777"}
                required
              />
              <Field.Label>
                MENSAGEM <Field.RequiredIndicator />
              </Field.Label>
              <Textarea
                name="mensagem"
                p={"20px"}
                w={"500px"}
                mb={"30px"}
                fontSize={"lg"}
                border={"1px solid white"}
                placeholder={"Digite sua mensagem aqui..."}
                required
              />
            </Field.Root>
            <Flex
              alignItems={"center"}
              w="300px"
              justifyContent={"space-between"}
              mb="40px"
            >
              <Button
                type="submit"
                w={"120px"}
                py="21px"
                fontSize={"16px"}
                fontWeight="bold"
                color="#363B8F"
                borderRadius={"21px"}
              >
                Enviar
              </Button>

              <Text fontSize={"18px"}>ou</Text>

              <Flex w="100px">
                <IconButton bg="none">
                  <Image width={"30px"} height={"30px"} src={iconFacebook} />
                </IconButton>

                <IconButton bg="none">
                  <Image width={"30px"} height={"30px"} src={iconInstagram} />
                </IconButton>

                <IconButton bg="none">
                  <Image width={"30px"} height={"30px"} src={iconWhatsapp} />
                </IconButton>

                <IconButton bg="none">
                  <Image width={"30px"} height={"30px"} src={iconTelefone} />
                </IconButton>
              </Flex>
            </Flex>
            <Text textAlign={"justify"} w="500px" fontSize={"18px"}>
              Preencha os dados acima para agendar o seu atendimento domiciliar.
              É rápido, seguro e sem compromisso. Por favor, certifique-se de
              que todas as informações estão corretas para que possamos
              atendê-lo da melhor forma possível.
            </Text>

            {/*Campos ocultos do FormSubmit*/}
            <input type="hidden" name="_captcha" value="false" />
          </Stack>
        </form>
      </Flex>

      <Image
        src={formImage}
        alt="Banner"
        width={"100%"}
        height={"100%"}
        objectFit={"cover"}
      />
    </Box>
  );
};
