import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function BuyButton({ book, fetchBooks }) {
    // The state indicates if the modal is shown
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBuy = async () => {
        setShow(false);

        const buyEndpoint = "http://localhost:3000/view-books/buy";

        const buyData = {
            bookId: book._id,
        };

        try {
            const response = await fetch(buyEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(buyData),
            });

            if (response.status === 500) {
                alert("Error al comprar el libro")
                return
            }

            alert("Libro comprado exitosamente")
            fetchBooks()
            console.log(response.status)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Button
                variant="info"
                className="w-100 fw-semibold"
                onClick={handleShow}
            >
                Comprar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comprar libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <strong>{book.title}</strong>
                    </p>
                    <p>
                        <strong>Autor: </strong>
                        {book.author}
                    </p>
                    <p>
                        <strong>Páginas: </strong>
                        {book.pages}
                    </p>
                    <p>
                        <strong>Géneros: </strong>
                        {book.genres.join(", ")}
                    </p>
                    <p>
                        <strong>Calificación: </strong>
                        {book.rating}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleBuy}>
                        Confirmar compra
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
