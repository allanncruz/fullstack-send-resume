import Logo from "./../../assets/logo-paytour.svg"
import { Nav, NavLink, Brand } from "./style";

export const Header = () => {

  return (
      <Nav>
        <NavLink to={'/'}>
          <Brand>
            <img src={Logo} alt="Paytour" />
          </Brand>
        </NavLink>
        <NavLink to={'/'}>
          Cadastrar currículo
        </NavLink>
        <NavLink to={'/resumes'}>
          Currículos cadastardos
        </NavLink>
      </Nav>
  )
};