import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
	padding: 15px 20px;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 13px ${props => props.theme.colors.black}20;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 900px;
  width: 100%;
`;


export const Brand = styled.div`
  margin-right: 50px;
	svg {
    border-radius: 4px;
  }

  @media(max-width: 720px){
    margin-right: 20px;

    img {
      width: 100px;
    }
  }
`;


export const NavLink = styled(Link)`
  margin: 0 10px;
  font-size: 14px;

  @media(max-width: 720px){
    font-size: 12px;
  }
`;