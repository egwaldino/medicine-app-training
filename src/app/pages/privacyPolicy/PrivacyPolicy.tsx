import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

export const PrivacyPolicy = () => {
  return (
    <Container
      minH={{ base: "100vh", md: "100vh" }}
      maxW="100%"
      px={{ base: 4, md: 16, xl: 40 }}
      py={{ base: 8, md: 12 }}
      bg="#fff"
      centerContent
    >
      <VStack align="stretch" gap={{ base: 4, md: 8 }}>
        <Box>
          <Heading
            as="h1"
            size={{ base: "lg", md: "xl" }}
            mb={2}
            color="#5759AF"
            textAlign={{ base: "center", md: "left" }}
          >
            Política de Privacidade
          </Heading>
          <Text
            fontSize="sm"
            color="gray.800"
            textAlign={{ base: "center", md: "left" }}
          >
            Última atualização: 23 de junho de 2025
          </Text>
        </Box>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          w={{ base: "100%", md: "80%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Na <strong>Health Care</strong>, levamos a sua privacidade muito a sério.
          Esta Política de Privacidade explica como recolhemos, utilizamos e
          protegemos os seus dados pessoais quando utiliza o nosso site para
          agendar atendimentos médicos ao domicílio.
        </Text>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            1. Dados Pessoais que Recolhemos
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Ao preencher o formulário de agendamento, poderemos recolher os
            seguintes dados:
            <br />- Nome completo
            <br />- Endereço de residência
            <br />- Contacto telefónico
            <br />- Endereço de e-mail
            <br />- Data e hora preferidas para o atendimento
            <br />- Informações relacionadas com a saúde (se aplicável)
            <br />- Outras informações fornecidas voluntariamente
          </Text>
        </Box>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            2. Finalidade do Tratamento de Dados
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Os dados recolhidos são utilizados para:
            <br />- Entrar em contacto e confirmar o agendamento
            <br />- Prestar o serviço de atendimento médico ao domicílio
            <br />- Enviar informações e atualizações sobre o atendimento
            <br />- Melhorar a qualidade dos nossos serviços
          </Text>
        </Box>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            3. Fundamento Legal
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            O tratamento dos seus dados é realizado com base no seu{" "}
            <strong>consentimento explícito</strong>, fornecido no momento do envio
            do formulário, em conformidade com o artigo 6.º do RGPD.
          </Text>
        </Box>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            4. Partilha de Dados com Terceiros
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Os seus dados <strong>não serão vendidos, alugados ou partilhados</strong>
            com terceiros para fins comerciais. Apenas profissionais autorizados da
            nossa equipa terão acesso às suas informações.
          </Text>
        </Box>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            5. Armazenamento e Segurança
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Utilizamos servidores seguros e medidas de proteção para garantir a
            segurança dos seus dados, limitando o acesso apenas a colaboradores
            autorizados.
          </Text>
        </Box>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            6. Retenção dos Dados
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Conservamos os seus dados apenas pelo tempo necessário para os fins
            indicados ou conforme exigido por lei.
          </Text>
        </Box>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            7. Os Seus Direitos
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Nos termos do RGPD, tem o direito de:
            <br />- Aceder aos seus dados
            <br />- Corrigir ou atualizar dados incorretos
            <br />- Solicitar a eliminação dos seus dados
            <br />- Retirar o consentimento
            <br />- Reclamar junto da CNPD
            <br />
            Para exercer estes direitos, contacte-nos através do e-mail: {" "}
            <strong>privacidade@heathcare.com</strong>
          </Text>
        </Box>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            8. Cookies
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Utilizamos cookies apenas para melhorar a navegação no site. Nenhuma
            informação pessoal é recolhida automaticamente.
          </Text>
        </Box>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            9. Alterações à Política
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Poderemos atualizar esta política a qualquer momento. Recomendamos que a
            consulte regularmente.
          </Text>
        </Box>

        <Box>
          <Heading
            as="h2"
            size="md"
            color="#5759AF"
            mb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            10. Contacto
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            w={{ base: "100%", md: "80%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Para mais informações ou questões sobre esta política, contacte-nos
            através do e-mail: <strong>privacidade@heathcare.com</strong>
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};
