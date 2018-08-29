import * as React from 'react';

import './FormPublic.scss';

interface FormPublicProps {
    title: string;
    text?: string;
    img?: string;
}

export const FormPublic = ({ title, text, img }: FormPublicProps) => {
    return (
        <section className="publica">
            <section className="publicPadre">
                <div className="title">
                    <h1>Publica Tu Ruta</h1>
                </div>
                <div className="publicForm">
                    <div className="foto">

                    </div>
                    <div className="des">

                    </div>
                </div>
            </section>
        </section>
    );
}