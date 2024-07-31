import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Thead, Tr, Th, Tbody, Td, EmptyBox } from './style';
import { ITableList } from '../../interfaces/types';
import { Button } from '../Button';
import EmptyImg from "../../assets/empty.png";

const TableList: React.FC<ITableList> = ({ body, header }) => {
  const navigate = useNavigate();

  if (body.length === 0) {
    return (
      <EmptyBox>
        <h3>Parece que não há nada por aqui :(</h3>
        <img src={EmptyImg} alt="Parece que não há nada por aqui :(" />
        <Button primary onClick={() => navigate('/')}>Cadastrar currículo</Button>
      </EmptyBox>
    );
  }

  return (
    <Table>
      <Thead>
        <Tr>
          {header?.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {body.map((resume) => (
          <Tr key={resume.id}>
            <Td>{resume.name}</Td>
            <Td>{resume.email}</Td>
            <Td>{resume.phone}</Td>
            <Td>{resume.desired_position}</Td>
            <Td>{resume.education}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableList;