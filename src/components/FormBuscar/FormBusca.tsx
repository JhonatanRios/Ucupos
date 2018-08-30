import * as React from 'react';

import './FormBusca.scss';

interface FormBuscaProps {
    title: string;
    text?: string;
    img?: string;
}

export const FormBusca = ({ title, text, img }: FormBuscaProps) => {
    return (
        <section className="bus">
            <section className="buscarPadre">
                <div className="title">
                    <h1>Busca tu Ruta</h1>
                </div>
                <div className="buscarForm">
                    <form className="custom-form">
                        <div className="uno">
                            <div className="form-group">
                                <input type="fecha" className="form-control"/>
                                <label className="animated-label">Fecha</label>
                            </div>
                            <div className="form-group">
                                <input type="hora" className="form-control"/>
                                <label className="animated-label">Hora</label>
                            </div>
                        </div>
                        <div className="dos">
                            <div className="form-group">
                                <input type="origen" className="form-control"/>
                                <label className="animated-label">Origen</label>
                            </div>
                            <div className="form-group">
                                <input type="destino" className="form-control"/>
                                <label className="animated-label">Destino</label>
                            </div>
                        </div>
                        <div className="tres">
                            <div className="submit">
                                <button className="btn btn-primary btn-block" id="buscar" type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    );
}