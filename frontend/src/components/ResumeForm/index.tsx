import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, FormButton, Label, StyledSelect, StyleInput, StyleTextarea, Title } from './style';

const ResumeForm: React.FC = () => {
  const [resumeSent, setResumeSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    desiredPosition: '',
    education: '',
    comments: '',
    resumeFile: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData(prevState => ({ ...prevState, resumeFile: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('desiredPosition', formData.desiredPosition);
      data.append('education', formData.education);
      data.append('comments', formData.comments);
      if (formData.resumeFile) {
        data.append('resumeFile', formData.resumeFile);
      }

      try {
          const response = await axios.post('/api/submit', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(response.data);
          setResumeSent(true)
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <Container>
        {!resumeSent ? (
          <>
            <Title>Cadastrar currículo</Title>
            <Form onSubmit={handleSubmit}>
              <Label>
                Nome:
                <StyleInput 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required />
              </Label>
              <Label>
                E-mail:
                <StyleInput 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required />
              </Label>
              <Label>
                Telefone:
                <StyleInput 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required />
              </Label>
              <Label>
                Cargo Desejado:
                <StyleInput 
                  type="text" 
                  name="desiredPosition" 
                  value={formData.desiredPosition} 
                  onChange={handleChange} 
                  required />
              </Label>
              <Label>
                Escolaridade:
                <StyledSelect name="education" value={formData.education} onChange={handleChange} required>
                  <option value="">Selecione</option>
                  <option value="ensino_medio">Ensino Médio</option>
                  <option value="graduacao">Graduação</option>
                  <option value="pos_graduacao">Pós-Graduação</option>
                  <option value="mestrado">Mestrado</option>
                  <option value="doutorado">Doutorado</option>
                </StyledSelect>
              </Label>
              <Label>
                Observações:
                <StyleTextarea name="comments" value={formData.comments} onChange={handleChange} />
              </Label>
              <Label>
                Arquivo:
                <StyleInput 
                  type="file" 
                  name="resumeFile" 
                  onChange={handleFileChange} />
              </Label>
              <FormButton 
                type="submit">Cadastrar</FormButton>
            </Form>
          </>
        ) : 
        (
          <>
            <Title>Currículo cadastardo com sucesso!</Title>
          </>
        )}
        
      </Container>
    );
};

export default ResumeForm;