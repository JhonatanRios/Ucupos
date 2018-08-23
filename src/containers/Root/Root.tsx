import * as React from 'react';

import './Root.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';


export class Root extends React.Component {
    render() {
        return <section>
            <div className="menu">
                <Header title="React Seed"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                    img="./assets/img/logo.png" />
            </div>
            <div className="cuerpo">
            </div>
            <div className="foote">
                <Footer
                    img="./assets/img/logo.png" />
            </div>
        </section>
    }
}























