import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

import './ListHisto.scss';

interface ListHistoProps {
    title: string;
    text?: string;
    img?: string;
}

export const ListHisto = observer((props: ListHistoProps) => {
    return (
        <section className="hist">
            <section className="histPadre">
                <div className="title">
                    <h1>Historial</h1>
                </div>
                {store.historia ? (
                    <div className="histForm">
                        {/*{store.historia.map((cupos: any) => {
                            <div className="lista" key={cupos.id}>*/}
                        <div className="lista">
                            <div className="lista">
                                <div className="histoCupo">
                                    <div className="diaHisto">
                                        <h1 className="diahist">DIA</h1>
                                        <h1 className="diaselec">{store.historia.dia}</h1>
                                    </div>
                                    <div className="descHisto">
                                        <div className="nomHist">
                                            <h1 className="titleNom">CONDUCTOR</h1>
                                            <p className="decNom">{store.historia.nombre}</p>
                                        </div>
                                        <div className="carHisto">
                                            <h1 className="titleNom">PLACA</h1>
                                            <p className="decNom">{store.historia.placa}</p>
                                        </div>
                                    </div>
                                    <div className="infoHisto">
                                        <div className="horaHist">
                                            <h1 className="titleHora">HORA</h1>
                                            <p className="decHora">{store.historia.hora}</p>
                                        </div>
                                        <div className="saliHisto">
                                            <h1 className="titleNom">PUNTO DE PARTIDA</h1>
                                            <p className="decNom">{store.historia.partida}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*}})}*/}
                    </div>
                ) : (
                        <div className="histForm">
                            <div className="mensaje">
                                <h2>Seleciona un Cupo de la lista</h2>
                            </div>
                        </div>
                    )
                }
            </section>
        </section>
    );
})