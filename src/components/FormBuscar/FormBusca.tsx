import * as React from 'react';

import './FormBusca.scss';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

interface FormBuscaProps {
}

 export const FormBusca = observer((props: FormBuscaProps) => {
    return (
        <section className="bus">
            <section className="buscarPadre">
                <div className="title">
                    <h1>Busca tu Ruta</h1>
                </div>
                <div className="buscarForm">
                    <div className="dia">
                        <div className="til">
                            <h1>Dias</h1>
                        </div>
                        <div className="boton">
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("dia", "lunes");
                                    }}>Lunes</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("dia", "martes");
                                    }}>Martes</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("dia", "miercoles");
                                    }}>Miercoles</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("dia", "jueves");
                                    }}>Jueves</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("dia", "viernes");
                                    }}>Viernes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hora">
                        <div className="til">
                            <h1>Hora</h1>
                        </div>
                        <div className="boton">
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("hora", "7:00AM");
                                    }}>7 AM</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("hora", "5:00PM");
                                    }}>5 PM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="parti">
                        <div className="til">
                            <h1>P. Partida</h1>
                        </div>
                        <div className="boton">
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("partida", "Icesi");
                                    }}>U.Icesi</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("partida", "calle36#15-40");
                                    }}>Casa</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("partida", "Javeriana");
                                    }}>Javeriana</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="llega">
                        <div className="til">
                            <h1>P. LLegada</h1>
                        </div>
                        <div className="boton">
                        <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("llegada", "Icesi");
                                    }}>U.Icesi</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("llegada", "calle 36 # 15 - 40");
                                    }}>Casa</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        store.setfilter("llegada", "Javeriana");
                                    }}>Javeriana</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
})