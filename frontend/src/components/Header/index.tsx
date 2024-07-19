import Logo from "./../../assets/logo-paytour.svg"
import { Container, Brand } from "./style";

export const Header = () => {

  return (
      <Container>
				<Brand>
					<img src={Logo} alt="Paytour" />
				</Brand>
      </Container>
  )
};