import {
  Routes as Switch,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import {
  Main,
  Schedule,
  PrivacyPolicy,
  TermsAndConditions,
  AboutUs,
  Team,
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
        <Route path="/pagina-agendamento" element={<Schedule />} />
        <Route path="/nossa-historia" element={<AboutUs />} />
        <Route path="/equipe" element={<Team />} />

        {/* Redirecionamento para a página inicial */}
        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Switch>
    </BrowserRouter>
  );
};
