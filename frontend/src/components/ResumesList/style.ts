import styled from "styled-components";

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 24px;
  text-align: center;
`

export const Table = styled.table`
  width: 100%;
  margin-top: 50px;
`

export const Thead = styled.thead`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`

export const Tr = styled.tr`
  height: 40px;
`

export const Th = styled.th`
  font-size: 13px;
`

export const Tbody = styled.tbody`
  font-size: 13px;
    tr:nth-child(even) {
      background: #f5f5f5
    }
    
    tr:nth-child(odd) {
      background: #FFF
    }
`

export const Td = styled.td`
  height: 20px;
`

export const EmptyBox = styled.div`
  text-align: center;
  margin: 50px 0;

  img {
    margin: 60px auto;
    display: block;
  }
`