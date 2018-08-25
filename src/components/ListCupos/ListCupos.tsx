import * as React from 'react';

import './ListCupos.scss';

interface ListCuposProps {
    title: string;
    text?: string;
    img?: string;
}

export const ListCupos = ({ title, text, img }: ListCuposProps) => {
    return (
        <section className="cupos">
            <section className="cuposPadre">

            </section>
        </section >
    );
}