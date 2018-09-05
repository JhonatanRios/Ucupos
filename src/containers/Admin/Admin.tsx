import * as React from 'react';

import './Admin.scss';

import { FormBusca } from '../../components/FormBuscar/FormBusca';
import { ListCupos } from '../../components/ListCupos/ListCupos';
import { Descrip } from '../../components/Descrip/Descrip';
import { Map } from '../../components/Map/Map';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

interface Props {
}

interface State {
    map: boolean;
}

@observer export class Admin extends React.Component<Props, State> {

    newArray: any = []

    constructor(props: Props) {
        super(props);
        this.state = {
            map: true,
        }
    }

    lunes = () => {
        this.newArray = store.lunes;
        console.log(this.newArray);
    }

    map = (event: any) => {
        event.preventDefault;
        /*------------------*/
        return true;
    }

    conductor = () => {
    }

    render() {
        return (
            <section className="admin">
                <section className="adminPadre">
                    <div className="izquierda">
                        <div className="buscCupo">
                            <FormBusca
                                lunes={this.lunes}
                            />
                        </div>
                        <div className="mapCupo">
                            <Map
                                map={this.state.map}
                                img="./assets/img/map.png" />
                        </div>
                    </div>
                    <div className="derecha">
                        <div className="lisCupo">
                            <ListCupos
                                newArray={this.newArray}
                                conductor={this.conductor} />
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