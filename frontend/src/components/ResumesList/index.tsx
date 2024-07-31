import { Table, Thead, Tr, Th, Tbody, Td, EmptyBox } from './style';
import { Resume } from '../../interfaces/types';
import EmptyImg from "../../assets/empty.png";
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

interface ITableList {
  body: Resume[];
  header: Array<String>;
}

const TableList = ({ body, header}: ITableList) => {
  const navigate = useNavigate();

  console.log(header)

  return (
    <>
      {body.length > 0 ? (
        <Table>
          <Thead>
            <Tr>
              {header?.map(item => (
                <Th>{item}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {body.map(resume => (
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
    </>
  );
}

export default TableList;