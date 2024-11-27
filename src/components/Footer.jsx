import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-white py-4">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h5>Bookstore</h5>
                            <p>
                                &copy; {new Date().getFullYear()} Todos los
                                derechos reservados.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}
