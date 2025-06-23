import { Flex, Collapsible, Box, Text } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

export const FAQs = () => {
  return (
    <Flex
      id="faqs"
      maxW={"100%"}
      p={"30px 300px"}
      marginTop={"300px"}
      scrollMarginTop="70px"
    >
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
              colheitas de amostras, sim — é necessário apresentar a prescrição
              médica. Para outros, como cuidados de idosos, basta agendar.
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
              por telefone ou WhatsApp. A nossa equipa irá confirmar os detalhes
              e agendar o melhor horário para si.
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
              certificados, com experiência em cuidados domiciliares e formação
              contínua.
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
              Sim. Após a colheita, os resultados são enviados para o seu e-mail
              ou disponibilizados através da nossa plataforma segura.
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
  );
};
