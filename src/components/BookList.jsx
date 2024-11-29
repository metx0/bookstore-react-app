import React, { useState, useEffect } from "react";
import Book from "./Book";
import { Container, Row } from "react-bootstrap";

/* 
Make the HTTP request to the Express API to get the list of books
and show them in a grid
The endpoint to get the books is: localhost:3000/books
*/

export default function BookList() {
    // The array of books will be part of the state of the component
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:3000/view-books");

                if (!response.ok) {
                    throw new Error("Error while fetching the data");
                }

                const data = await response.json();
                setBooks(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading)
        return <p className="text-center h3 mt-3">Cargando libros...</p>;

    return (
        <Container className="py-5">
            <Row>
                {books.map((book) => (
                    <Book key={book._id} book={book}></Book>
                ))}
            </Row>
        </Container>
    );
}
