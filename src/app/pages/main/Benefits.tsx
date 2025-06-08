import {
    Box,
    Flex,
    Text,
    Image,
    VStack,
    HStack,
  Collapsible,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import IconBeneficios from "../../../assets/Group 165.png";

export const Benefits = () => {
  return (
    <HStack marginTop={"100px"} maxW={"900px"} id="benefits">
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
                Aceda aos seus relatórios de saúde, histórico de atendimentos e
                agendamentos num clique. Tudo centralizado, simples e seguro.
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
  );
};
