import {
  Routes as Switch,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { Main, Schedule } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={<Main />} />
        <Route path="/pagina-agendamento" element={<Schedule />} />

        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Switch>
    </BrowserRouter>
  );
};
