import { useState } from 'react';

export const useContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sent');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('');
    }, 3000);
  };

  return { formData, setFormData, formStatus, handleSubmit };
};
