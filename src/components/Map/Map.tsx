import * as React from 'react';

import './Map.scss';

interface MapProps {
    title: string;
    text?: string;
    img?: string;
}

export const Map = ({ title, text, img }: MapProps) => {
    return (
        <section className="">
            <section className="mapPadre">

            </section>
        </section >
    );
}