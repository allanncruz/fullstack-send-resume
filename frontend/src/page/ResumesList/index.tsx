import { useEffect, useState } from 'react';
import { Container, Title } from './style';
import { IResumes } from '../../interfaces/types';
import axios from 'axios';
import TableList from '../../components/TableList';
import Loading from '../../components/Loading';

const ResumeList = () => {
  const [resumes, setResumes] = useState<IResumes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResumes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/resumes');
        setResumes(response.data);
      } catch (error) {
        console.error('There was an error fetching the resumes!', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const dataHeader = [
    'Nome',
    'E-mail',
    'Telefone',
    'Cargo',
    'Escolaridade'
  ];

  return (
    <Container>
      <Title>Currículos cadastrados</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <TableList header={dataHeader} body={resumes} />
      )}
    </Container>
  );
};

export default ResumeList;