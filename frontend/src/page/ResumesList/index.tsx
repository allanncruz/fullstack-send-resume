import { useEffect, useState } from "react";
import { Container, Title } from "./style";
import { Resume } from "../../interfaces/types";
import axios from "axios";
import TableList from "../../components/ResumesList";

const ResumeList = () => {
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
      <TableList
        header={dataHeader}
        body={resumes} />
    </Container>
  );
}

export default ResumeList;