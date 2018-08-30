import * as React from 'react';

import './Map.scss';

interface MapProps {
    img?: string;
    map: boolean;
}

export const Map = (props: MapProps) => {
    return (
        <section className="mapi">
            <section className="mapPadre">
                <div className="title">
                    <h1>Ruta</h1>
                </div>
                {!props.map &&
                    <div className="imagen">
                        <img src={props.img} />
                    </div>
                }
            </section>
        </section>
    );
}