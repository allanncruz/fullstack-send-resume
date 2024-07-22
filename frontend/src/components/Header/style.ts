import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.header`
	display: flex;
	align-items: center;
	padding: 15px 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
`;


export const Brand = styled.div`
  margin-right: 50px;
	svg {
    border-radius: 4px;
  }
`;


export const NavLink = styled(Link)`
  margin: 0 10px;
`;