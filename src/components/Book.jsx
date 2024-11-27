import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import BuyButton from "./BuyButton";

export default function Book({ book }) {
    return (
        <Col sm={12} md={6} lg={3}>
            <Card className="bg-light mb-4">
                <Card.Img
                    variant="top"
                    src="https://grimoakpress.com/cdn/shop/files/cover-notw-fc.jpg?v=1706902909"
                    alt={book.title}
                    className="img-fluid p-3 book-img"
                />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        <strong>Autor:</strong> {book.author}
                    </Card.Text>
                    <BuyButton book={book} />
                </Card.Body>
            </Card>
        </Col>
    );
}
