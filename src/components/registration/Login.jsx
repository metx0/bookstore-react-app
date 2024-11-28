import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

/* 
A form to allow a user to login
*/
export default function Login() {
    const loginEndpoint = "http://localhost:3000/";

    // States for the username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // The object we will convert to JSON
        const loginData = {
            username,
            password,
        };

        try {
            const response = await fetch(loginEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            // If it was successful
            if (response.ok) {
                // Go to the shop
                const data = await response.json();
                console.log("Login successful:", data);
            } else {
                // Show a modal or something
                console.error("Error in the login:", response.statusText);
            }
        } catch (error) {
            console.error("Error in thr request:", error);
        }
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
                            <Form.Label className="fw-semibold">
                                Nombre de usuario
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ingresa tu username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label className="fw-semibold">
                                Contraseña
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Contraseña"
                                onChange={(e) => setPassword(e.target.value)}
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
