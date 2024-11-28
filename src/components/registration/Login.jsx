import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

/* 
A form to allow a user to login
*/
export default function Login() {
    return (
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                   Nunca compartiremos tu correo con nadie
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
}
