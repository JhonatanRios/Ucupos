import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

import './Map.scss';

interface MapProps {
}

export const Map = observer((props: MapProps) => {
    return (
        <section className="mapi">
            <section className="mapPadre">
                <div className="title">
                    <h1>Ruta</h1>
                </div>
                {store.selecionado ? (
                    <div className="imagen">
                        <img src={"./assets/img/" + store.selecionado.mapa + ".png"} alt="" />
                    </div>
                ) : (
                        <div className="imagen">
                            <h2>Seleciona un Cupo de la lista</h2>
                        </div>
                    )
                }
            </section>
        </section>
    );
})