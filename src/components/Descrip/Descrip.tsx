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
                    <div className="informacion">
                        <div className="persoDesc">
                            <div className="user">
                                <div className="nomUser">
                                    <h1 className="titleNom">CONDUCTOR</h1>
                                    <p className="decNom">Jhonatan Stiven Rios Villa</p>
                                </div>
                                <div className="carUser">
                                    <h1 className="titleNom">PLACA</h1>
                                    <p className="decNom">DMI-220</p>
                                </div>
                                <div className="contacUser">
                                    <h1 className="titleNum">CONTACTO: </h1>
                                    <p className="decNom">(+57) 3156366632</p>
                                </div>
                            </div>
                        </div>
                        <div className="infoDesc">
                            <div className="userInfo">
                                <div className="viajeUser">
                                    <h1 className="titleNom"># VIAJES</h1>
                                    <p className="decNom">30</p>
                                </div>
                                <div className="calUser">
                                    <h1 className="titleNom">CALIFICACIÓN</h1>
                                    <p className="decNom">3</p>
                                </div>
                                <div className="puesUser">
                                    <h1 className="titleNum">PUESTOS DISPONIBLES</h1>
                                    <p className="decNom">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aceptar">
                        <div className="submit">
                            <button className="btn btn-primary btn-block" id="acep" type="submit">Aceptar</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}