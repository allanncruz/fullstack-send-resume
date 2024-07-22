import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Resume {
  id: number;
  name: string;
  email: string;
  phone: string;
  desired_position: string;
  education: string;
  comments: string;
  resume_file: string;
  submitted_at: string;
}

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

  return (
    <div>
      <h1>Resumes List</h1>
      <ul>
        {resumes.map(resume => (
          <li key={resume.id}>
            <p>Name: {resume.name}</p>
            <p>Email: {resume.email}</p>
            <p>Phone: {resume.phone}</p>
            <p>Desired Position: {resume.desired_position}</p>
            <p>Education: {resume.education}</p>
            <p>Comments: {resume.comments}</p>
            <p>Resume File: {resume.resume_file}</p>
            <p>Submitted At: {resume.submitted_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResumesList;