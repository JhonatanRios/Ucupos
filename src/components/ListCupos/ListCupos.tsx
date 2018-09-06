import * as React from 'react';
import { observer } from 'mobx-react';

import './ListCupos.scss';
import { store } from '../../stores/store';

interface ListCuposProps {

}

@observer export class ListCupos extends React.Component<ListCuposProps, {}> {
    constructor(props: ListCuposProps) {
        super(props);
    }

    render() {
        return (
            <section className="cupo">
                <section className="cupoPadre">
                    <div className="title">
                        <h1>Lista de Cupos</h1>
                    </div>
                    <div className="cupoForm">
                        <div className="lista">
                            {store.listaFiltrada.map((cupos: any) => {
                                return <div className="cupos" key={cupos.id} onClick={() => {
                                    store.selec(cupos);
                                }
                                }>
                                    <div className="datos">
                                        <div className="user">
                                            <div className="nomUser">
                                                <h1 className="titleNom">CONDUCTOR</h1>
                                                <p className="decNom">{cupos.nombre}</p>
                                            </div>
                                            <div className="carUser">
                                                <h1 className="titleNom">PLACA</h1>
                                                <p className="decNom">{cupos.placa}</p>
                                            </div>
                                        </div>
                                        <div className="position">
                                            <div className="puntajeUser">
                                                <h1 className="titleNom">CALIFICACIÓN</h1>
                                                <p className="decNom">{cupos.calificacion}</p>
                                            </div>
                                            <div className="carUser">
                                                <h1 className="titleNom"># VIAJES</h1>
                                                <p className="decNom">{cupos.viajes}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="puestos">
                                        <div className="cuposDis">
                                            <h1 className="titlecupos"># Puestos Disponibles</h1>
                                            <p className="puesto">{cupos.puestos}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
            </section >
        );
    }
}