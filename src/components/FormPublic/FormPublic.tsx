import * as React from 'react';

import './FormPublic.scss';

interface FormPublicProps {
    title: string;
    text?: string;
    img?: string;
}

export const FormPublic = ({ title, text, img }: FormPublicProps) => {
    return (
        <section className="public">
            <h1>Publicar</h1>
        </section >
    );
}