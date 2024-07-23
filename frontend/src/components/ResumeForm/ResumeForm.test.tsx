import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResumeForm from '.';

test('renders the form and submits with correct data', async () => {
  render(<ResumeForm />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const phoneInput = screen.getByLabelText(/phone/i);
  const positionInput = screen.getByLabelText(/desired position/i);
  const educationSelect = screen.getByLabelText(/education/i);
  const fileInput = screen.getByLabelText(/resume file/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  // Simulate user input
  fireEvent.change(nameInput, { target: { value: 'Allan Cruz' } });
  fireEvent.change(emailInput, { target: { value: 'allan@domain.com' } });
  fireEvent.change(phoneInput, { target: { value: '1234567890' } });
  fireEvent.change(positionInput, { target: { value: 'Fullstack Developer' } });
  fireEvent.change(educationSelect, { target: { value: "Graduação" } });

  const file = new File(['dummy content'], 'example.doc', { type: 'application/msword' });
  Object.defineProperty(fileInput, 'files', {
    value: [file],
  });
  fireEvent.change(fileInput);

  // Submit the form
  fireEvent.click(submitButton);

  // Check if the form data is correct
  await screen.findByText('Resume submitted successfully');
});