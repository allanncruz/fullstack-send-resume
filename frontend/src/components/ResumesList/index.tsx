import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Title, Container, Table, Thead, Tr, Th, Tbody, Td } from './style';
import { Resume } from '../../interfaces/types';



const ResumesList: React.FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);

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

  return (
    <Container>
      <Title>Currículos cadastrados</Title>
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
    </Container>
  );
}

export default ResumesList;