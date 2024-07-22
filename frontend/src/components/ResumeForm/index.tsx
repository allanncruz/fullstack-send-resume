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
  ButtonsArea } from './style';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormInput } from '../../interfaces/types';

const ResumeForm: React.FC = () => {
  const [resumeSent, setResumeSent] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
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
                {errors.name && <span>This field is required</span>}
              </Label>
              <Label>
                E-mail:
                <StyleInput type="email" {...register('email', { required: true })} />
                {errors.email && <span>This field is required</span>}
              </Label>
              <Label>
                Telefone:
                <StyleInput type="tel" {...register('phone', { required: true })} />
                {errors.phone && <span>This field is required</span>}
              </Label>
              <Label>
                Cargo Desejado:
                <StyleInput {...register('desiredPosition', { required: true })} />
                {errors.desiredPosition && <span>This field is required</span>}
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
                {errors.education && <span>This field is required</span>}
              </Label>
              <Label>
                Observações:
                <StyleTextarea {...register('comments')} />
              </Label>
              <Label>
                Arquivo:
                <StyleInput type="file" {...register('resumeFile')} />
              </Label>
              <FormButton 
                type="submit">Cadastrar</FormButton>
            </Form>
          </>
        ) : 
        (
          <>
            <Title>Currículo cadastardo com sucesso!</Title>
            <ButtonsArea>
              <Button light onClick={() => navigate(0)}>Voltar</Button>
              <Button primary onClick={() => navigate('/resumes')}>Currículos cadastrados</Button>
            </ButtonsArea>
          </>
        )}
        
      </Container>
    );
};

export default ResumeForm;