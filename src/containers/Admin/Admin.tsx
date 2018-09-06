import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

import './Admin.scss';

import { FormBusca } from '../../components/FormBuscar/FormBusca';
import { ListCupos } from '../../components/ListCupos/ListCupos';
import { Descrip } from '../../components/Descrip/Descrip';
import { Map } from '../../components/Map/Map';

interface Props {
}

interface State {
}

@observer export class Admin extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section className="admin">
                <section className="adminPadre">
                    <div className="izquierda">
                        <div className="buscCupo">
                            <FormBusca />
                        </div>
                        <div className="mapCupo">
                            <Map />
                        </div>
                    </div>
                    <div className="derecha">
                        <div className="lisCupo">
                            <ListCupos />
                        </div>
                        <div className="descCupo">
                            <Descrip />
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}