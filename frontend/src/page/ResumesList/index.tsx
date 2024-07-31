import { useEffect, useState } from "react";
import { Container, Title } from "./style";
import { IResumes } from "../../interfaces/types";
import axios from "axios";
import TableList from "../../components/TableList";
import Loading from "../../components/Loading";

const ResumeList = () => {
  const [resumes, setResumes] = useState<IResumes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)

    axios.get('/api/resumes')
      .then(response => {
        setResumes(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the resumes!', error);
        setIsLoading(false);
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
      {!isLoading ? (
        <TableList
          header={dataHeader}
          body={resumes} />
        ) : (
          <Loading />
      )}
    </Container>
  );
}

export default ResumeList;