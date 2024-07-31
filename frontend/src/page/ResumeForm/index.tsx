import React, { useState } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
  ConfirmedBox,
  StyleInputMask
} from './style';
import { Button } from '../../components/Button';
import { IFormInput } from '../../interfaces/types';
import ConfirmedImg from '../../assets/confirmed.png';

const ResumeForm: React.FC = () => {
  const [resumeSent, setResumeSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const navigate = useNavigate();

  const createFormData = (data: IFormInput) => {
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
    return formData;
  };

  const handleFormSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const formData = createFormData(data);
      const response = await axios.post('/api/submit', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Resume submitted successfully:', response.data);
      setResumeSent(true);
    } catch (error) {
      console.error('There was an error submitting the resume!', error);
    }
  };

  const renderError = (field: keyof IFormInput) => {
    return errors[field] && <span>{errors[field]?.message || `Campo ${field} é obrigatório`}</span>;
  };

  return (
    <Container>
      {!resumeSent ? (
        <>
          <Title>Cadastrar currículo</Title>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Label>
              Nome:
              <StyleInput type='text' {...register('name', { required: true })} />
              {renderError('name')}
            </Label>
            <Label>
              E-mail:
              <StyleInput type='email' {...register('email', { required: true })} />
              {renderError('email')}
            </Label>
            <Label>
              Telefone:
              <StyleInputMask
                type='tel'
                {...register('phone', { required: true })}
                mask='(__) _ ____-____'
                replacement={{ _: /\d/ }}
              />
              {renderError('phone')}
            </Label>
            <Label>
              Cargo Desejado:
              <StyleInput {...register('desiredPosition', { required: true })} />
              {renderError('desiredPosition')}
            </Label>
            <Label>
              Escolaridade:
              <StyledSelect {...register('education', { required: true })}>
                <option value=''>Selecione</option>
                <option value='ensino_medio'>Ensino Médio</option>
                <option value='graduacao'>Graduação</option>
                <option value='pos_graduacao'>Pós-Graduação</option>
                <option value='mestrado'>Mestrado</option>
                <option value='doutorado'>Doutorado</option>
              </StyledSelect>
              {renderError('education')}
            </Label>
            <Label>
              Observações:
              <StyleTextarea {...register('comments')} />
            </Label>
            <Label>
              Anexar currículo (doc, .docx ou .pdf):
              <StyleInput
                type='file'
                {...register('resumeFile', {
                  required: true,
                  validate: {
                    acceptedFormats: (files) =>
                      ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'].includes(files[0]?.type) || 'Formato de arquivo inválido.',
                    lessThan1MB: (files) =>
                      files[0]?.size < 1048576 || 'O tamanho do arquivo deve ser inferior a 1 MB'
                  }
                })}
              />
              {renderError('resumeFile')}
            </Label>
            <FormButton type='submit'>Cadastrar</FormButton>
          </Form>
        </>
      ) : (
        <ConfirmedBox>
          <Title>Currículo cadastrado com sucesso!</Title>
          <img src={ConfirmedImg} alt='Parece que não há nada por aqui :(' />
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