import React from "react";

export default function About() {
    return (
        <div className="">
            <div className="text-center bg-info py-5">
                <h1>Acerca de</h1>
                <p className="lead fw-semibold">
                    Una breve descripción de nosotros
                </p>
            </div>
            <div className="container py-5">
                <div className="my-5">
                    <h2 className="text-center mb-5">Somos estudiantes</h2>
                    <ul className="list-group text-center fw-semibold">
                        <li className="list-group-item">
                            Somos estudiantes de la UAC
                        </li>
                        <li className="list-group-item">
                            Este es un proyecto de Concurrencia y Paralelismo
                        </li>
                        <li className="list-group-item">
                            El framework aplica la concurrencia por debajo
                        </li>
                    </ul>
                </div>
                <div className="my-5">
                    <h2 className="text-center mb-5">Integrantes</h2>
                    <ul className="list-group text-center fw-semibold">
                        <li className="list-group-item">
                            Miguel Alejandro Torruco
                        </li>
                        <li className="list-group-item">
                            Fabrizio Guzmán Liza
                        </li>
                        <li className="list-group-item">Eduardo Javier Naal</li>
                        <li className="list-group-item">
                            Jean Carlos Chan Noh
                        </li>
                    </ul>
                </div>
                <div className="container my-5">
                    <h2 className="text-center mb-5">
                        ¿Cómo aplicamos la concurrencia
                    </h2>
                    <p className="text-center lead">
                        La concurrencia en nuestro proyecto aplica en que los
                        clientes pueden estar explorando los libros, añadiendo
                        al carrito o realizando compras al mismo tiempo. Así
                        mismo en el manejo de APIs para la conexión con la aplicación
                        de Express que nos proporciona los libros. Por otra
                        parte también contamos con el inicio de sesión para
                        mejorar tanto la experiencia del usuario como el manejo
                        eficiente de las solicitudes al servidor.
                    </p>
                </div>
                <div className="d-flex justify-content-center align-items-center my-4">
                    <img
                        className="img-fluid"
                        src="https://joearms.github.io/images/con_and_par.jpg"
                        alt="Concurrencia y Paralelismo"
                    />
                </div>
            </div>
        </div>
    );
}
