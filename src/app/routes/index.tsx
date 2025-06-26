import {
  Routes as Switch,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import {
  Main,
  Team,
  Thanks,
  AboutUs,
  Schedule,
  PrivacyPolicy,
  TermsAndConditions,
} from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={<Main />} />

        <Route
          path="/pagina-politica-privacidade"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/pagina-termos-condicoes"
          element={<TermsAndConditions />}
        />
        <Route path="/equipe" element={<Team />} />
        <Route path="/nossa-historia" element={<AboutUs />} />
        <Route path="/pagina-agendamento" element={<Schedule />} />
        <Route path="/pagina-agradecimento" element={<Thanks />} />

        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Switch>
    </BrowserRouter>
  );
};
