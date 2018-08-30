import * as React from 'react';

import './Admin.scss';

import { FormBusca } from '../../components/FormBuscar/FormBusca';
import { ListCupos } from '../../components/ListCupos/ListCupos';
import { Descrip } from '../../components/Descrip/Descrip';
import { Map } from '../../components/Map/Map';

interface Props {
}

interface State {
    fecha: string;
    hora: string;
    origen: string;
    destino: string;
    map: boolean;
}

export class Admin extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fecha: "",
            hora: "",
            origen: "",
            destino: "",
            map: true,
        }
    }

    handleChangeFecha = (event: any) => { }
    handleChangeHora = (event: any) => { }
    handleChangeOrigen = (event: any) => { }
    handleChangeDestino = (event: any) => { }

    busca = (event: any) => {
        event.preventDefault;
        /*------------------*/
        localStorage.setItem('fecha', this.state.fecha);
        localStorage.setItem('hora', this.state.hora);
        localStorage.setItem('origen', this.state.origen);
        localStorage.setItem('destino', this.state.destino);
        /*------------------*/

    }

    map = (event: any) => {
        event.preventDefault;
        /*------------------*/
        return true;
    }

    render() {
        return (
            <section className="admin">
                <section className="adminPadre">
                    <div className="izquierda">
                        <div className="buscCupo">
                            <FormBusca
                                fecha={this.state.fecha}
                                hora={this.state.hora}
                                origen={this.state.origen}
                                destino={this.state.destino}
                                busca={this.busca}
                                handleChangeFecha={this.handleChangeFecha}
                                handleChangeHora={this.handleChangeHora}
                                handleChangeOrigen={this.handleChangeOrigen}
                                handleChangeDestino={this.handleChangeDestino} />
                        </div>
                        <div className="mapCupo">
                            <Map
                                map={this.state.map}
                                img="./assets/img/map.png" />
                        </div>
                    </div>
                    <div className="derecha">
                        <div className="lisCupo">
                            <ListCupos title="Listado de Cupos"
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                                img="./assets/img/logo.png" />
                        </div>
                        <div className="descCupo">
                            <Descrip title="Decripción"
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                                img="./assets/img/logo.png" />
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}