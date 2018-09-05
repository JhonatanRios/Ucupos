import * as React from 'react';

import './FormBusca.scss';

interface FormBuscaProps {
    lunes: any;
}

export const FormBusca = (props: FormBuscaProps) => {
    return (
        <section className="bus">
            <section className="buscarPadre">
                <div className="title">
                    <h1>Busca tu Ruta</h1>
                </div>
                <div className="buscarForm">
                    <div className="dia">
                        <div className="til"></div>
                        <div className="boton">
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        props.lunes();
                                    }}>Lunes</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                    }}>Martes</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                    }}>Miercoles</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                    }}>Jueves</button>
                                </div>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                    }}>Viernes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hora">
                        <div className="til"></div>
                        <div className="boton">
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                    }}>7 AM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="parti">
                        <div className="til"></div>
                        <div className="boton">
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                    }}>U.Icesi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="llega">
                        <div className="til"></div>
                        <div className="boton">
                            <div className="submit">
                                <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                    ev.preventDefault();
                                }}>U.Icesi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}