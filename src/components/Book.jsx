import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import BuyButton from "./BuyButton";

export default function Book({ book, fetchBooks }) {
    return (
        <Col sm={12} md={6} lg={3}>
            <Card className="bg-light mb-4">
                <Card.Img
                    variant="top"
                    src={book.coverURL}
                    alt={book.title}
                    className="img-fluid p-3 book-img"
                />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        <strong>Autor:</strong> {book.author}
                    </Card.Text>
                    <Card.Text>
                        <strong>Precio:</strong> {book.price}
                    </Card.Text>
                    <BuyButton fetchBooks={fetchBooks} book={book} />
                </Card.Body>
            </Card>
        </Col>
    );
}
