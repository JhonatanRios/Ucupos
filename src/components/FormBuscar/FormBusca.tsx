import * as React from 'react';

import './FormBusca.scss';

interface FormBuscaProps {
    title: string;
    text?: string;
    img?: string;
}

export const FormBusca = ({ title, text, img }: FormBuscaProps) => {
    return (
        <section className="">
            <section className="buscarPadre">

            </section>
        </section >
    );
}