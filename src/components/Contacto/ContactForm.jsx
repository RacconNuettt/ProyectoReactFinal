import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../../styles/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
    });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!termsAccepted || Object.values(formData).some(x => x.trim() === '')) {
            setError('Please fill all fields and accept the terms.');
            return;
        }

        emailjs.send('service_5j8ksg8', 'template_hcag65g', formData, 'zgUHQAUWnOd3voyuz')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setFormData({ name: '', lastname: '', email: '', phone: '', message: '' });
                setTermsAccepted(false);
            }, (err) => {
                console.error('Failed to send:', err);
            });
    };

    return (
        <>
            <br />
            <br />
            <div className="contact-form-container">
                <h2 className="contact-title">Formulario de Contacto</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <Form onSubmit={handleSubmit} className="contact-form">
                    <Form.Group controlId="formName">
                        <Form.Label className="form-label">Nombre</Form.Label>
                        <Form.Control className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formLastname">
                        <Form.Label className="form-label">Apellidos</Form.Label>
                        <Form.Control className="form-input" type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label className="form-label">Correo</Form.Label>
                        <Form.Control className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label className="form-label">Teléfono</Form.Label>
                        <Form.Control className="form-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                        <Form.Label className="form-label">Mensaje</Form.Label>
                        <Form.Control className="form-input" as="textarea" name="message" value={formData.message} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="form-checkbox-group">
                        <Form.Check
                            className="form-checkbox"
                            type="checkbox"
                            label="Ya he leído los términos de condición."
                            onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        <Button variant="link" onClick={() => setShowModal(true)} className="terms-link">Leer Términos</Button>
                    </Form.Group>
                    <Button className="submit-btn" variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Términos de condiciones</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Todo el contenido de este sitio, incluidos textos, gráficos, es propiedad de El Álamo o de sus licenciantes. Está protegido por las leyes de derechos de autor y marcas registradas.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default ContactForm;
