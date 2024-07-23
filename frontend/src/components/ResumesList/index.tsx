import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Title, Container, Table, Thead, Tr, Th, Tbody, Td, EmptyBox } from './style';
import { Resume } from '../../interfaces/types';
import EmptyImg from "../../assets/empty.png";
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

const ResumesList: React.FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/resumes')
      .then(response => {
        setResumes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the resumes!', error);
      });
  }, []);

  const dataHeader = [
    "Nome",
    "E-mail",
    "Telefone",
    "Cargo",
    "Escolaridade"
  ]

  console.log(resumes.length)

  return (
    <Container>
      <Title>Currículos cadastrados</Title>
      {resumes.length > 0 ? (
        <Table>
          <Thead>
            <Tr>
              {dataHeader?.map(item => (
                <Th key={item}>{item}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {resumes.map(resume => (
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
      ):(
        <EmptyBox>
          <h3>Parece que não há nada por aqui :(</h3>
          <img src={EmptyImg} alt="Parece que não há nada por aqui :(" />

          <Button primary onClick={() => navigate('/')}>Cadastrar currículo</Button>
        </EmptyBox>
      )}
      
    </Container>
  );
}

export default ResumesList;