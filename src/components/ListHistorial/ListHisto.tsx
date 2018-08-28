import * as React from 'react';

import './ListHisto.scss';

interface ListHistoProps {
    title: string;
    text?: string;
    img?: string;
}

export const ListHisto = ({ title, text, img }: ListHistoProps) => {
    return (
        <section className="hist">
            <section className="histPadre">
                <div className="title">
                    <h1>Rutas Historicas</h1>
                </div>
                <div className="histForm">
                    <div className="lista">

                    </div>
                </div>
            </section >
        </section >
    );
}