import * as React from 'react';

import './ListHisto.scss';

interface ListHistoProps {
    title: string;
    text?: string;
    img?: string;
}

export const ListHisto = ({ title, text, img }: ListHistoProps) => {
    return (
        <section className="hist">
            <section className="histPadre">
                <div className="title">
                    <h1>Rutas Historicas</h1>
                </div>
                <div className="histForm">
                    <div className="lista">
                        <div className="histoCupo">
                            <div className="diaHisto">
                                <h1 className="diahist">DIA</h1>
                                <h1 className="diaselec">Lunes</h1>
                            </div>
                            <div className="descHisto">
                                <div className="nomHist">
                                    <h1 className="titleNom">CONDUCTOR</h1>
                                    <p className="decNom">Jhonatan Stiven Rios Villa</p>
                                </div>
                                <div className="carHisto">
                                    <h1 className="titleNom">PLACA</h1>
                                    <p className="decNom">DMI-220</p>
                                </div>
                            </div>
                            <div className="infoHisto">
                                <div className="horaHist">
                                    <h1 className="titleHora">HORA</h1>
                                    <p className="decHora">3:00 PM</p>
                                </div>
                                <div className="saliHisto">
                                    <h1 className="titleNom">PUNTO DE PARTIDA</h1>
                                    <p className="decNom">U.Icesi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}