import * as React from 'react';

import './Admin.scss';

import { FormBusca } from '../../components/FormBuscar/FormBusca';
import { ListCupos } from '../../components/ListCupos/ListCupos';
import { Descrip } from '../../components/Descrip/Descrip';
import { Map } from '../../components/Map/Map';

export class Admin extends React.Component {
    render() {
        return (
            <section className="admin">
                <section className="derecha">
                    <div className="list">
                        <ListCupos title="Listado de Cupos"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                            img="./assets/img/logo.png" />
                    </div>
                    <div className="desc">
                        <Descrip title="Decripción"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                            img="./assets/img/logo.png" />
                    </div>
                </section>
                <section className="izquierda">
                    <div className="busc">
                        <FormBusca title="Buscador"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                            img="./assets/img/logo.png" />
                    </div>
                    <div className="map">
                        <Map title="Mapa"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                            img="./assets/img/logo.png" />
                    </div>
                </section>
            </section>
        )
    }
}