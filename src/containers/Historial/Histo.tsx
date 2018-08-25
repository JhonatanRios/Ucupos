import * as React from 'react';
import { ListHisto } from '../../components/ListHistorial/ListHisto';


export class Historial  extends React.Component{
    render() {
        return (
            <section className="historial">
            <ListHisto title="React Seed"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                    img="./assets/img/logo.png" />
            </section>
        )
    }
}