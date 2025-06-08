import { Box } from "@chakra-ui/react";

import { Header } from "./Header";
import { Benefits } from "./Benefits";
import { Services } from "./Services";
import { FAQs } from "./FAQs";
import { Contacts } from "./Contacts";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <Box color={"black"} w={"100%"} backgroundColor={"white"}>
      <Header />

      <Benefits />

      <Services />

      <FAQs />

      <Contacts />

      <Footer />
    </Box>
  );
};
