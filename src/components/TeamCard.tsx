import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  Stack,
  Button,
} from "@chakra-ui/react";
import EC from "../assets/EC.jpg";
import DrJoaoPedro from "../assets/dr-joao-pedro.jpg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


interface TeamMember {
  name: string;
  role: string;
  photo: string;
  description: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
}

const team: TeamMember[] = [
  {
    name: "Dr. Mario Chivela",
    role: "Enfermeiro Especialista",
    photo: "https://bit.ly/sage-adebayo", // Substitua pelo caminho correto da imagem
    description:
      "Médica com especialização em clínica geral, dedicada ao cuidado integral dos pacientes.",
    facebook: "https://facebook.com/mario.chivela",
    instagram: "https://instagram.com/mario.chivela",
    whatsapp: "https://wa.me/244999888777",
  },
  {
    name: "Dr. João Pedro",
    role: "Biomédico",
    photo: DrJoaoPedro, 
    description:
      "Biomédico com vasta experiência em análises clínicas e diagnóstico laboratorial.",
    facebook: "https://facebook.com/joao.pedro",
    instagram: "https://instagram.com/joao.pedro",
    whatsapp: "https://wa.me/244922458160",
  },
  {
    name: "Egwaldino Cassuente",
    role: "Programador Fullstack",
    photo: EC,
    description:
      "Desenvolvedor fullstack com foco em soluções tecnológicas para o setor de saúde.",
    facebook: "https://facebook.com/egwaldino.cassuente",
    instagram: "https://instagram.com/egwaldino.cassuente",
    whatsapp: "https://wa.me/351964433241",
  },
];

export const TeamCard = () => {
  return (
    <Flex gap={8} justify="center" align="center">
      {team.map((member, idx) => (
        <Box
          key={idx}
          bg="white"
          borderRadius="2xl"
          boxShadow="lg"
          p={6}
          w="280px"
          alignItems="center"
        >
          <Stack gap={4} alignItems="center" direction="column">
            <Image
              src={member.photo}
              alt={member.name}
              borderRadius="full"
              boxSize="120px"
              objectFit="cover"
              mb={2}
            />
            <Text fontWeight="bold" fontSize="xl" color="#363B8F">
              {member.name}
            </Text>
            <Text fontSize="md" color="gray.600">
              {member.role}
            </Text>
            <Text fontSize="sm" color="gray.500" textAlign="center">
              {member.description}
            </Text>
            <Stack direction="row" gap={3} mt={2} alignItems="center">
              {member.facebook && (
                <Link
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button bg="none" p="0" minW="auto" height="auto">
                   <FaFacebook color="#4A4DA5"/>
                  </Button>
                </Link>
              )}
              {member.instagram && (
                <Link
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button bg="none" p="0" minW="auto" height="auto">
                     <FaInstagram color="#4A4DA5"/>
                  </Button>
                </Link>
              )}
              {member.whatsapp && (
                <Link
                  href={member.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <Button bg="none" p="0" minW="auto" height="auto">
                     <FaWhatsapp color="#4A4DA5"/>
                  </Button>
                </Link>
              )}
            </Stack>
          </Stack>
        </Box>
      ))}
    </Flex>
  );
};
