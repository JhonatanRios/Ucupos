import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

import './Descrip.scss';

interface DescripProps {
}

export const Descrip = observer((props: DescripProps) => {
    return (
        <section className="descrip">
            <section className="descripPadre">
                <div className="title">
                    <h1>Conductor</h1>
                </div>
                {store.selecionado ? (
                    <div className="descripForm">
                        <div className="informacion">
                            <div className="persoDesc">
                                <div className="user">
                                    <div className="nomUser">
                                        <h1 className="titleNom">CONDUCTOR</h1>
                                        <p className="decNom">{store.selecionado.nombre}</p>
                                    </div>
                                    <div className="carUser">
                                        <h1 className="titleNom">PLACA</h1>
                                        <p className="decNom">{store.selecionado.placa}</p>
                                    </div>
                                    <div className="contacUser">
                                        <h1 className="titleNum">CONTACTO: </h1>
                                        <p className="decNom">(+57) {store.selecionado.contacto}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="infoDesc">
                                <div className="userInfo">
                                    <div className="viajeUser">
                                        <h1 className="titleNom"># VIAJES</h1>
                                        <p className="decNom">{store.selecionado.viajes}</p>
                                    </div>
                                    <div className="calUser">
                                        <h1 className="titleNom">CALIFICACIÓN</h1>
                                        <p className="decNom">{store.selecionado.calificacion}</p>
                                    </div>
                                    <div className="puesUser">
                                        <h1 className="titleNum">PUESTOS DISPONIBLES</h1>
                                        <p className="decNom">{store.selecionado.puestos}</p>
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
                ) : (
                        <div className="informacion">
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