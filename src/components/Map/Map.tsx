import * as React from 'react';

import './Map.scss';

interface MapProps {
    title: string;
    text?: string;
    img?: string;
}

export const Map = (props: MapProps) => {
    return (
        <section className="mapi">
            <section className="mapPadre">
                <div className="title">
                    <h1>Ruta</h1>
                </div>
                <div className="imagen">
                    <img src={props.img} />
                </div>
            </section>
        </section>
    );
}