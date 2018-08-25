import * as React from 'react';

import './Descrip.scss';

interface DescripProps {
    title: string;
    text?: string;
    img?: string;
}

export const Descrip = ({ title, text, img }: DescripProps) => {
    return (
        <section className="">
            <section className="descripPadre">

            </section>
        </section >
    );
}