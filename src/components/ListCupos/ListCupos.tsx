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
                        <div className="cupos">
                            <div className="datos">
                                <div className="user">
                                    <div className="nomUser">
                                        <h1 className="titleNom">CONDUCTOR</h1>
                                        <p className="decNom">Jhonatan Stiven Rios Villa</p>
                                    </div>
                                    <div className="carUser">
                                        <h1 className="titleNom">PLACA</h1>
                                        <p className="decNom">DMI-220</p>
                                    </div>
                                </div>
                                <div className="position">
                                    <div className="puntajeUser">
                                        <h1 className="titleNom">CALIFICACIÓN</h1>
                                        <p className="decNom">4</p>
                                    </div>
                                    <div className="carUser">
                                        <h1 className="titleNom"># VIAJES</h1>
                                        <p className="decNom">3</p>
                                    </div>
                                </div>
                            </div>
                            <div className="puestos">
                                <div className="cuposDis">
                                    <h1 className="titlecupos"># Puestos Disponibles</h1>
                                    <p className="puesto">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}