import * as React from 'react';

import './FormBusca.scss';

interface FormBuscaProps {
    title: string;
    text?: string;
    img?: string;
}

export const FormBusca = ({ title, text, img }: FormBuscaProps) => {
    return (
        <section className="bus">
            <section className="buscarPadre">
            <div className="title">
                    <h1>Encuentra tu Ruta</h1>
                </div>
                <div className="buscarForm">

                </div>
            </section>
        </section>
    );
}