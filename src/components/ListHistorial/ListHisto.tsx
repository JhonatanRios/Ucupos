import * as React from 'react';

import './ListHisto.scss';

interface ListHistoProps {
    title: string;
    text?: string;
    img?: string;
}

export const ListHisto = ({ title, text, img }: ListHistoProps) => {
    return (
        <section className="histo">
                <h1>Historial</h1>
        </section >
    );
}