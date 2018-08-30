import * as React from 'react';

import './FormBusca.scss';

interface FormBuscaProps {
    fecha: string;
    hora: string;
    origen: string;
    destino: string;
    busca: any;
    handleChangeFecha: any;
    handleChangeHora: any;
    handleChangeOrigen: any;
    handleChangeDestino: any;
}

export const FormBusca = (props: FormBuscaProps) => {
    return (
        <section className="bus">
            <section className="buscarPadre">
                <div className="title">
                    <h1>Busca tu Ruta</h1>
                </div>
                <div className="buscarForm">
                    <form className="custom-form" onSubmit={props.busca}>
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