import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

export const TermsAndConditions = () => {
  return (
    <Container maxW="100%" p="50px 250px" bg={"#fff"}>
      <VStack align="stretch" gap={8}>
        <Box>
          <Heading as="h1" size="xl" mb={2} color="#5759AF">
            Termos e Condições
          </Heading>
          <Text fontSize="sm" color="gray.800">
            Última atualização: 23 de junho de 2025
          </Text>
        </Box>

        <Text fontSize="md" color="gray.700" w={"80%"}>
          Estes Termos e Condições regulam o uso do site e dos serviços prestados pela <strong>Health Care</strong>. Ao utilizar o nosso site, concorda com estes termos.
        </Text>

        <Box>
          <Heading as="h2" size="md" color="#5759AF" mb={2}>
            1. Utilização do Serviço
          </Heading>
          <Text fontSize="md" color="gray.700">
            O site destina-se ao agendamento de atendimentos médicos ao domicílio. O utilizador compromete-se a fornecer informações verdadeiras e completas no formulário de agendamento.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" color="#5759AF" mb={2}>
            2. Responsabilidades do Utilizador
          </Heading>
          <Text fontSize="md" color="gray.700">
            O utilizador é responsável pela veracidade dos dados fornecidos e pelo uso adequado do serviço, não devendo utilizar o site para fins ilícitos ou não autorizados.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" color="#5759AF" mb={2}>
            3. Alterações ao Serviço
          </Heading>
          <Text fontSize="md" color="gray.700">
            A <strong>Health Care</strong> reserva-se o direito de modificar, suspender ou descontinuar o serviço, total ou parcialmente, a qualquer momento, sem aviso prévio.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" color="#5759AF" mb={2}>
            4. Propriedade Intelectual
          </Heading>
          <Text fontSize="md" color="gray.700">
            Todo o conteúdo do site, incluindo textos, imagens, logótipos e marcas, é propriedade da <strong>Health Care</strong> ou de terceiros, sendo protegido por direitos de autor e outras leis aplicáveis.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" color="#5759AF" mb={2}>
            5. Limitação de Responsabilidade
          </Heading>
          <Text fontSize="md" color="gray.700">
            A <strong>Health Care</strong> não se responsabiliza por danos resultantes do uso indevido do site ou por falhas técnicas alheias ao seu controlo.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" color="#5759AF" mb={2}>
            6. Privacidade
          </Heading>
          <Text fontSize="md" color="gray.700">
            O tratamento dos dados pessoais é realizado conforme a nossa Política de Privacidade. Para mais informações, consulte a respetiva página.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" color="#5759AF" mb={2}>
            7. Alterações aos Termos
          </Heading>
          <Text fontSize="md" color="gray.700">
            Reservamo-nos o direito de alterar estes Termos e Condições a qualquer momento. Recomendamos que os consulte regularmente.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" color="#5759AF" mb={2}>
            8. Contacto
          </Heading>
          <Text fontSize="md" color="gray.700">
            Para dúvidas ou informações adicionais, contacte-nos através do e-mail: <strong>privacidade@heathcare.com</strong>
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};
