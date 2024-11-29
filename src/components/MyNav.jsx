import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavPrivateRoute from "./NavPrivateRoute";
import LogoutButton from "./registration/LogoutButton";

export default function MyNav() {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark">
            <Container>
                <Navbar.Brand>Bookstore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">
                                Tienda
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/about">
                                Acerca de
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/register">
                                Regístrate
                            </Nav.Link>
                        </Nav.Item>
                        {/* Renderices the element if the user is authenticated */}
                        <NavPrivateRoute
                            element={
                                <Nav.Item>
                                    <Nav.Link>
                                        <LogoutButton></LogoutButton>
                                    </Nav.Link>
                                </Nav.Item>
                            }
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
