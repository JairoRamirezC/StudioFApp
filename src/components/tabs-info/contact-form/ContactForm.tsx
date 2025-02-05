import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { FormData } from '../../../common/utils/types';


const ContactForm = ():JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event?.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Datos enviados >>> ', formData);
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Contáctanos</h2>
      <form className="contact-form__form" onSubmit={handleSubmit}>
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-form__input"
            required
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form__input"
            required
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="subject" className="contact-form__label">Asunto:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-form__input"
            required
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-form__textarea"
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-form__button">Enviar</button>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', fontSize:'1.4rem' }}>
          ¡Datos enviados con éxito!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;