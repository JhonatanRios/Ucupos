import * as React from 'react';

import './Descrip.scss';

interface DescripProps {
    title: string;
    text?: string;
    img?: string;
}

export const Descrip = ({ title, text, img }: DescripProps) => {
    return (
        <section className="descrip">
            <section className="descripPadre">
                <div className="title">
                    <h1>Conductor</h1>
                </div>
                <div className="descripForm">
                    <div className="fotoCon">

                    </div>
                    <div className="desCon">

                    </div>
                </div>
            </section>
        </section>
    );
}