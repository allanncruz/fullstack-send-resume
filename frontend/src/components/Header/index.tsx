import Logo from "./../../assets/logo-paytour.svg"
import { Nav, NavLink, Brand, Container } from "./style";

export const Header = () => {

  return (
      <Container>
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
            Currículos cadastrados
          </NavLink>
        </Nav>
      </Container>
  )
};