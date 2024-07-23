import React, { useState } from 'react';
import axios from 'axios';
import { 
  Container, 
  Form, 
  FormButton, 
  Label, 
  StyledSelect, 
  StyleInput, 
  StyleTextarea, 
  Title, 
  ButtonsArea, 
  ConfirmedBox} from './style';
import { Button } from '../Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormInput } from '../../interfaces/types';
import { useNavigate } from 'react-router-dom';
import ConfirmedImg from "../../assets/confirmed.png";

const ResumeForm: React.FC = () => {
  const [resumeSent, setResumeSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('desiredPosition', data.desiredPosition);
    formData.append('education', data.education);
    formData.append('comments', data.comments);
    if (data.resumeFile[0]) {
      formData.append('resumeFile', data.resumeFile[0]);
    }

    axios.post('/api/submit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Resume submitted successfully:', response.data);
      setResumeSent(true)
    })
    .catch(error => {
      console.error('There was an error submitting the resume!', error);
    });
  };
    
    return (
      <Container>
        {!resumeSent ? (
          <>
            <Title>Cadastrar currículo</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label>
                Nome:
                <StyleInput type="text" {...register('name', { required: true })} />
                {errors.name && <span>Campo Nome é obrigatório</span>}
              </Label>
              <Label>
                E-mail:
                <StyleInput type="email" {...register('email', { required: true })} />
                {errors.email && <span>Campo E-mail é obrigatório</span>}
              </Label>
              <Label>
                Telefone:
                <StyleInput type="tel" {...register('phone', { required: true })} />
                {errors.phone && <span>Campo Telefone é obrigatório</span>}
              </Label>
              <Label>
                Cargo Desejado:
                <StyleInput {...register('desiredPosition', { required: true })} />
                {errors.desiredPosition && <span>Campo Cargo Desejado é obrigatório</span>}
              </Label>
              <Label>
                Escolaridade:
                <StyledSelect {...register('education', { required: true })}>
                  <option value="">Selecione</option>
                  <option value="ensino_medio">Ensino Médio</option>
                  <option value="graduacao">Graduação</option>
                  <option value="pos_graduacao">Pós-Graduação</option>
                  <option value="mestrado">Mestrado</option>
                  <option value="doutorado">Doutorado</option>
                </StyledSelect>
                {errors.education && <span>Campo Escolaridade é obrigatório</span>}
              </Label>
              <Label>
                Observações:
                <StyleTextarea {...register('comments')} />
              </Label>
              <Label>
                Anexar currículo (doc, .docx ou .pdf):
                <StyleInput 
                  type="file" 
                  {...register('resumeFile', {
                  required: true,
                  validate: {
                    acceptedFormats: (files) => [
                      'application/msword', 
                      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
                      'application/pdf'].includes(files[0]?.type) || 'Formato de arquivo inválido. ',
                    lessThan1MB: (files) => files[0]?.size < 1048576 || 'O tamanho do arquivo deve ser inferior a 1 MB'
                  }
                })} 
                />
                {errors.resumeFile && <span>{errors.resumeFile.message}</span>}
              </Label>
              <FormButton 
                type="submit">Cadastrar</FormButton>
            </Form>
          </>
        ) : 
        (
          <ConfirmedBox>
            <Title>Currículo cadastrado com sucesso!</Title>
            <img src={ConfirmedImg} alt="Parece que não há nada por aqui :(" />
            <ButtonsArea>
              <Button light onClick={() => navigate(0)}>Voltar</Button>
              <Button primary onClick={() => navigate('/resumes')}>Currículos cadastrados</Button>
            </ButtonsArea>
          </ConfirmedBox>
        )}
        
      </Container>
    );
};

export default ResumeForm;