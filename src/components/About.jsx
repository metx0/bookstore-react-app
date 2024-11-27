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
