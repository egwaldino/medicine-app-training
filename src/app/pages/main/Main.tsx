import {
  Text,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  VStack,
  Collapsible,
  Field,
  Input,
  Stack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import Banner from "../../../assets/Banner.png";
import IconBanner from "../../../assets/Group 99.png";
import IconBeneficios from "../../../assets/Group 165.png";
import formImage from "../../../assets/formSession.png";
import { FaChevronDown } from "react-icons/fa6";
import ImageServices from "../../../assets/Vector.png";
import iconFacebook from "../../../assets/iconFacebook.svg";
import iconInstagram from "../../../assets/iconInstagram.svg";
import iconWhatsapp from "../../../assets/iconWhatsapp.svg";
import iconTelefone from "../../../assets/iconTelefone.svg";

export const Main = () => {
  return (
    <Box color={"black"} w={"100%"}  backgroundColor={"white"}>
      <Box position={"relative"}>
        <Flex
          position="absolute"
          top="0"
          left="0"
          width="100%"
          px="8"
          py="4"
          color="white"
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"15px 150px"}
        >
          <Button color={"white"} size={"xl"} variant="plain">
            Health Care
          </Button>

          <HStack>
            <Button color={"white"} size={"lg"} variant="plain">
              Serviços
            </Button>
            <Button color={"white"} size={"lg"} variant="plain">
              FAQs
            </Button>
            <Button color={"white"} size={"lg"} variant="plain">
              Agendamento / Contactos
            </Button>
            <Button borderRadius={"full"}>Entrar</Button>
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

      <HStack marginTop={"100px"} maxW={"900px"}>
        <VStack p={"30px 150px"} maxW={"100%"} alignItems={"none"}>
          <Text
            color={"black"}
            fontSize={"42px"}
            fontWeight={"semibold"}
            letterSpacing="-2px"
          >
            Benefícios de aderir à Health Care
          </Text>
          <Text fontSize={"16px"}>
            Na Health Care, cuidamos de si e de quem mais ama, com serviços de
            saúde personalizados e humanizados no conforto do lar.
          </Text>
          <Box width={"100%"} divideY="1px">
            <Collapsible.Root>
              <Collapsible.Trigger paddingY="3">
                <Flex
                  align="center"
                  gap="2"
                  cursor={"pointer"}
                  fontWeight={"semibold"}
                >
                  CUIDADOS PERSONALIZADOS EM CASA
                  <FaChevronDown />
                </Flex>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box
                  padding="4"
                  marginBottom={"6"}
                  bgColor={"gray.200"}
                  borderRadius={"10px"}
                >
                  Os nossos profissionais acompanham cada cliente com atenção e
                  empatia, adaptando os cuidados à sua condição de saúde e
                  necessidades específicas.
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Collapsible.Root>
              <Collapsible.Trigger paddingY="3">
                <Flex
                  align="center"
                  gap="2"
                  cursor={"pointer"}
                  fontWeight={"semibold"}
                >
                  MAIS COMODIDADE, MENOS ESPERA
                  <FaChevronDown />
                </Flex>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box
                  padding="4"
                  marginBottom={"6"}
                  bgColor={"gray.200"}
                  borderRadius={"10px"}
                >
                  Esqueça filas, deslocações e esperas em hospitais. Levamos os
                  cuidados que precisa até si — com pontualidade e flexibilidade
                  de horários.
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Collapsible.Root>
              <Collapsible.Trigger paddingY="3">
                <Flex
                  align="center"
                  gap="2"
                  cursor={"pointer"}
                  fontWeight={"semibold"}
                >
                  ADMINISTRAÇÃO SEGURA DE MEDICAMENTOS
                  <FaChevronDown />
                </Flex>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box
                  padding="4"
                  marginBottom={"6"}
                  bgColor={"gray.200"}
                  borderRadius={"10px"}
                >
                  Receba as suas medicações corretamente, na dose e no tempo
                  certo, com supervisão profissional para garantir segurança e
                  eficácia.
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Collapsible.Root>
              <Collapsible.Trigger paddingY="3">
                <Flex
                  align="center"
                  gap="2"
                  cursor={"pointer"}
                  fontWeight={"semibold"}
                >
                  COLHEITAS DE AMOSTRAS SEM SAIR DE CASA
                  <FaChevronDown />
                </Flex>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box
                  padding="4"
                  marginBottom={"6"}
                  bgColor={"gray.200"}
                  borderRadius={"10px"}
                >
                  Análises laboratoriais com recolha no domicílio — simples,
                  rápido e com total confidencialidade.
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Collapsible.Root>
              <Collapsible.Trigger paddingY="3">
                <Flex
                  align="center"
                  gap="2"
                  cursor={"pointer"}
                  fontWeight={"semibold"}
                >
                  CUIDADO ATENTO E HUMANIZADO PARA IDOSOS
                  <FaChevronDown />
                </Flex>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box
                  padding="4"
                  marginBottom={"6"}
                  bgColor={"gray.200"}
                  borderRadius={"10px"}
                >
                  Acompanhamento próximo e dedicado para promover bem-estar,
                  autonomia e qualidade de vida aos mais velhos.
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Collapsible.Root>
              <Collapsible.Trigger paddingY="3">
                <Flex
                  align="center"
                  gap="2"
                  cursor={"pointer"}
                  fontWeight={"semibold"}
                >
                  TECNOLOGIA QUE APROXIMA
                  <FaChevronDown />
                </Flex>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box
                  padding="4"
                  marginBottom={"6"}
                  bgColor={"gray.200"}
                  borderRadius={"10px"}
                >
                  Aceda aos seus relatórios de saúde, histórico de atendimentos
                  e agendamentos num clique. Tudo centralizado, simples e
                  seguro.
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Collapsible.Root>
              <Collapsible.Trigger paddingY="3">
                <Flex
                  align="center"
                  gap="2"
                  cursor={"pointer"}
                  fontWeight={"semibold"}
                >
                  TRANQUILIDADE PARA A FAMÍLIA
                  <FaChevronDown />
                </Flex>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box
                  padding="4"
                  marginBottom={"6"}
                  bgColor={"gray.200"}
                  borderRadius={"10px"}
                >
                  Relatórios e atualizações periódicas mantêm os familiares
                  informados e tranquilos — mesmo à distância.
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>
          </Box>
        </VStack>
        <Image
          src={IconBeneficios}
          alt="Icon dos Benefícios"
          position={"absolute"}
          top={"850px"}
          right={"0px"}
          width={"421px"}
          height={"675px"}
        />
      </HStack>

      <Box position={"relative"} mt={"80"}>
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

      <Flex marginTop={"400px"} maxW={"100%"} p={"30px 300px"}>
        <Flex direction={"column"} width={"100%"} divideY="1px">
          <Text
            mb={"10"}
            color={"black"}
            fontSize={"42px"}
            textAlign={"center"}
            letterSpacing={"-2px"}
            fontWeight={"semibold"}
          >
            Perguntas Frequentes
          </Text>
          <Collapsible.Root>
            <Collapsible.Trigger paddingY="3" w={"100%"}>
              <Flex
                gap="2"
                cursor={"pointer"}
                fontWeight={"semibold"}
                justifyContent={"space-between"}
              >
                <Text>Quais regiões a Health Care atende?</Text>
                <FaChevronDown />
              </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box
                padding="4"
                marginBottom={"6"}
                bgColor={"gray.200"}
                borderRadius={"10px"}
              >
                Atendemos em [colocar a área geográfica — ex: Grande Lisboa,
                Porto, etc.]. Entre em contacto para confirmar a disponibilidade
                na sua localidade.
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>

          <Collapsible.Root>
            <Collapsible.Trigger paddingY="3" w={"100%"}>
              <Flex
                gap="2"
                cursor={"pointer"}
                fontWeight={"semibold"}
                justifyContent={"space-between"}
              >
                <Text>Preciso de receita médica para receber atendimento?</Text>
                <FaChevronDown />
              </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box
                padding="4"
                marginBottom={"6"}
                bgColor={"gray.200"}
                borderRadius={"10px"}
              >
                Para alguns serviços como administração de medicamentos e
                colheitas de amostras, sim — é necessário apresentar a
                prescrição médica. Para outros, como cuidados de idosos, basta
                agendar.
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>

          <Collapsible.Root>
            <Collapsible.Trigger paddingY="3" w={"100%"}>
              <Flex
                gap="2"
                cursor={"pointer"}
                fontWeight={"semibold"}
                justifyContent={"space-between"}
              >
                <Text>Como funciona o agendamento?</Text>
                <FaChevronDown />
              </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box
                padding="4"
                marginBottom={"6"}
                bgColor={"gray.200"}
                borderRadius={"10px"}
              >
                Basta preencher o formulário no nosso site ou entrar em contacto
                por telefone ou WhatsApp. A nossa equipa irá confirmar os
                detalhes e agendar o melhor horário para si.
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>

          <Collapsible.Root>
            <Collapsible.Trigger paddingY="3" w={"100%"}>
              <Flex
                gap="2"
                cursor={"pointer"}
                fontWeight={"semibold"}
                justifyContent={"space-between"}
              >
                <Text>
                  Quem são os profissionais que realizam os atendimentos?
                </Text>
                <FaChevronDown />
              </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box
                padding="4"
                marginBottom={"6"}
                bgColor={"gray.200"}
                borderRadius={"10px"}
              >
                Todos os nossos profissionais são enfermeiros e cuidadores
                certificados, com experiência em cuidados domiciliares e
                formação contínua.
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>

          <Collapsible.Root>
            <Collapsible.Trigger paddingY="3" w={"100%"}>
              <Flex
                gap="2"
                cursor={"pointer"}
                fontWeight={"semibold"}
                justifyContent={"space-between"}
              >
                <Text>Com que antecedência devo agendar?</Text>
                <FaChevronDown />
              </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box
                padding="4"
                marginBottom={"6"}
                bgColor={"gray.200"}
                borderRadius={"10px"}
              >
                Recomendamos agendar com pelo menos 24 horas de antecedência. Em
                casos urgentes, tentamos atender no próprio dia, conforme
                disponibilidade
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>

          <Collapsible.Root>
            <Collapsible.Trigger paddingY="3" w={"100%"}>
              <Flex
                gap="2"
                cursor={"pointer"}
                fontWeight={"semibold"}
                justifyContent={"space-between"}
              >
                <Text>Os resultados dos exames ficam disponíveis online?</Text>
                <FaChevronDown />
              </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box
                padding="4"
                marginBottom={"6"}
                bgColor={"gray.200"}
                borderRadius={"10px"}
              >
                Sim. Após a colheita, os resultados são enviados para o seu
                e-mail ou disponibilizados através da nossa plataforma segura.
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>

          <Collapsible.Root>
            <Collapsible.Trigger paddingY="3" w={"100%"}>
              <Flex
                gap="2"
                cursor={"pointer"}
                fontWeight={"semibold"}
                justifyContent={"space-between"}
              >
                <Text>O atendimento é coberto por algum seguro de saúde?</Text>
                <FaChevronDown />
              </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box
                padding="4"
                marginBottom={"6"}
                bgColor={"gray.200"}
                borderRadius={"10px"}
              >
                Atualmente, trabalhamos com atendimento particular. Estamos em
                processo de parcerias com seguradoras — entre em contacto para
                informações atualizadas.
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>

          <Collapsible.Root>
            <Collapsible.Trigger paddingY="3" w={"100%"}>
              <Flex
                gap="2"
                cursor={"pointer"}
                fontWeight={"semibold"}
                justifyContent={"space-between"}
              >
                <Text>
                  {" "}
                  Posso agendar atendimento recorrente (diário ou semanal)?
                </Text>
                <FaChevronDown />
              </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box
                padding="4"
                marginBottom={"6"}
                bgColor={"gray.200"}
                borderRadius={"10px"}
              >
                Sim. Oferecemos planos personalizados para quem precisa de
                acompanhamento contínuo, seja para medicação, cuidados de idosos
                ou controle de doenças crónicas.
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>
        </Flex>
      </Flex>

      <Box position={"relative"} mt="20" maxW={"100%"}>
        <Flex
          position="absolute"
          direction={"column"}
          top="150px"
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
              Fazer Agendamento
            </Text>
            <Text fontWeight={"normal"} fontSize={"18px"}>
              Entre em contacto com a nossa equipe de medicina domiciliar
            </Text>
          </Box>
          <Stack>
            <Field.Root gap={"10px"}>
              <Field.Label>FULL NAME</Field.Label>
              <Input
                p={"20px"}
                w={"500px"}
                mb={"30px"}
                type={"name"}
                fontSize={"lg"}
                border={"1px solid white"}
                placeholder={"João Pedro Domingos"}
              />
              <Field.Label>
                EMAIL <Field.RequiredIndicator />
              </Field.Label>
              <Input
                p={"20px"}
                w={"500px"}
                mb={"30px"}
                type={"email"}
                fontSize={"lg"}
                border={"1px solid white"}
                placeholder={"health@exemplo.com"}
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
                Agendar
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
          </Stack>
        </Flex>

        <Image
          src={formImage}
          alt="Banner"
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
        />
      </Box>

      <Flex mt="70px" p={"15px 150px"} justifyContent={"space-between"} w="100%">
        <Box>
          <Text mb="30px" fontWeight={"bold"} color="#363B8F">Health Care</Text>
          <Text>
            Copyright © 2025 Health Care • Todos os direitos reservados
          </Text>
        </Box>

        <Flex w="400px" mr="140px" gap="10" justifyContent={"space-between"}>
          <Box>
            <Text mb="20px" fontWeight={"bold"} color="#363B8F">Health Care</Text>
            <Link href="..." color="#000000" mb="20px">Termos e Condições</Link>
            <Link href="..." color="#000000" mb="20px">Politica de Privacidade</Link>
          </Box>
          <Flex direction={"column"} w="200px">
            <Text fontWeight={"bold"} mb="20px" color="#363B8F">Sobre</Text>
            <Link href="..." color="#000000" mb="20px">Nossa História</Link>
            <Link href="..." color="#000000" mb="20px">Benefícios</Link>
            <Link href="..." color="#000000">Equipe</Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
