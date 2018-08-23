import * as React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './Root.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
//-----------------
//Containers
import { Login } from '../Login/Login';
import { Registro } from '../Registro/Registro';
import { Admin } from '../Admin/Admin';
import { Historial } from '../Historial/Histo';
import { Publicar } from '../Publicar/Publicar';

export class Root extends React.Component {
    render() {
        return (
            <Router>
                <section>
                    <div className="menu">
                        <Header title="React Seed"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                            img="./assets/img/logo.png" />
                    </div>
                    <div className="cuerpo">
                        <Route exact path="/" component={Login} />
                        <Route path="/regist" component={Registro} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/historial" component={Historial} />
                        <Route path="/publicar" component={Publicar} />
                    </div>
                    <div className="foote">
                        <Footer
                            img="./assets/img/logo.png" />
                    </div>
                </section>
            </Router>
        )
    }
}