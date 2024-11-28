import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

/* 
A form to allow a user to login
*/
export default function Login() {
    const loginEndpoint = "http://localhost:3000/";

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center vh-100"
        >
            <Row>
                <Col>
                    <Form
                        onSubmit={handleSubmit}
                        className="p-4 shadow rounded bg-white login-form"
                    >
                        <h3 className="text-center mb-3">Inicia sesión</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ingresa tu username"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Contraseña"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Text>
                                ¿No tienes una cuenta?{" "}
                                <Link to="/register">Regístrate</Link>
                            </Form.Text>
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                        >
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
