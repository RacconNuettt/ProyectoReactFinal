import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';

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
        <div className="container mt-5">
            <h2>Formulario de contacto</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formLastname">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Ya he leido los terminos de condicion."
                        onChange={() => setTermsAccepted(!termsAccepted)}
                    />
                    <Button variant="link" onClick={() => setShowModal(true)}>Leer Terminos</Button>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>

            {/* Terms Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Terminos de condiciones</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Todo el contenido de este sitio, incluidos textos, gráficos es propiedad de El Alamo o de sus licenciantes. Está protegido por las leyes de derechos de autor y marcas registradas.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ContactForm;
