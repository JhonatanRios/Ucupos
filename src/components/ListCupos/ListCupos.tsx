import * as React from 'react';

import './ListCupos.scss';

interface ListCuposProps {
    title: string;
    text?: string;
    img?: string;
}

export const ListCupos = ({ title, text, img }: ListCuposProps) => {
    return (
        <section className="cupo">
            <section className="cupoPadre">
                <div className="title">
                    <h1>Lista de Cupos</h1>
                </div>
                <div className="cupoForm">
                    <div className="lista">

                    </div>
                </div>
            </section>
        </section>
    );
}