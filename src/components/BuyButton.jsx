import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function BuyButton({ book }) {
    // The state indicates if the modal is shown
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" className="w-100 fw-semibold" onClick={handleShow}>
                Comprar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comprar libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <p><strong>{book.title}</strong></p>
                   <p><strong>Autor: </strong>{book.author}</p>
                   <p><strong>Páginas: </strong>{book.pages}</p>
                   <p><strong>Géneros: </strong>{book.genres.join(", ")}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Confirmar compra
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
