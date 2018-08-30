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
                    <div className="informacion">
                        <div className="foto">

                        </div>
                        <div className="des">

                        </div>
                    </div>
                    <div className="publi">
                        <div className="submit">
                            <button className="btn btn-primary btn-block" id="publi" type="submit">Publicar</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}