import {
  Box,
  Flex,
  Text,
  Stack,
  Field,
  Input,
  Image,
  Button,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import formImage from "../../../assets/formSession.png";
import iconFacebook from "../../../assets/iconFacebook.svg";
import iconWhatsapp from "../../../assets/iconWhatsapp.svg";
import iconTelefone from "../../../assets/iconTelefone.svg";
import iconInstagram from "../../../assets/iconInstagram.svg";


export const Contacts = () => {
  
  return (
    <Box
      maxW={"100%"}
      id={"contacts"}
      marginTop={"170px"}
      position={"relative"}
      scrollMarginTop={"26px"}
    >
      <Flex
        px={"8"}
        py={"4"}
        w={"100wh"}
        top={"20px"}
        right={"0px"}
        color={"white"}
        p={"15px 150px"}
        direction={"column"}
        position={"absolute"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box mb={"40px"}>
          <Text fontWeight={"extrabold"} fontSize={"50px"}>
            Entrar em Contacto
          </Text>
          <Text fontWeight={"normal"} fontSize={"18px"}>
            Entre em contacto com a nossa equipe de medicina domiciliar
          </Text>
        </Box>
        <form method="POST" action="https://formsubmit.co/joao3641@gmail.com">
          <Stack>
            <Field.Root gap={"10px"}>
              <Field.Label>NOME COMPLETO</Field.Label>
              <Input
                required
                p={"20px"}
                w={"500px"}
                mb={"30px"}
                type={"name"}
                fontSize={"lg"}
                name={"fullName"}
                border={"1px solid white"}
                placeholder={"João Pedro Domingos"}
              />
              <Field.Label>TELEFONE</Field.Label>
              <Input
                required
                p={"20px"}
                w={"500px"}
                mb={"30px"}
                type={"tel"}
                fontSize={"lg"}
                name={"phoneNumber"}
                border={"1px solid white"}
                placeholder={"+244 999 888 777"}
              />
              <Field.Label>
                MENSAGEM <Field.RequiredIndicator />
              </Field.Label>
              <Textarea
                required
                p={"20px"}
                w={"500px"}
                mb={"30px"}
                fontSize={"lg"}
                name={"mensagem"}
                border={"1px solid white"}
                placeholder={"Digite sua mensagem aqui..."}
              />
            </Field.Root>
            <Flex
              w={"300px"}
              mb={"40px"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Button
                w={"120px"}
                py={"21px"}
                type={"submit"}
                color={"#363B8F"}
                fontSize={"16px"}
                fontWeight={"bold"}
                borderRadius={"21px"}
              >
                Enviar
              </Button>

              <Text fontSize={"18px"}>ou</Text>

              <Flex w="100px">
                <IconButton bg="none" disabled>
                  <Image width={"30px"} height={"30px"} src={iconFacebook} />
                </IconButton>

                <IconButton bg="none" disabled>
                  <Image width={"30px"} height={"30px"} src={iconInstagram} />
                </IconButton>

                <IconButton bg="none" disabled>
                  <Image width={"30px"} height={"30px"} src={iconWhatsapp} />
                </IconButton>

                <IconButton bg="none" disabled>
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
            <input
              name="_next"
              type="hidden"
              value="https://medicine-app-training.vercel.app/pagina-agradecimento"
            />
          </Stack>
        </form>
      </Flex>

      <Image
        alt={"Banner"}
        width={"100%"}
        height={"100%"}
        src={formImage}
        objectFit={"cover"}
      />
    </Box>
  );
};
