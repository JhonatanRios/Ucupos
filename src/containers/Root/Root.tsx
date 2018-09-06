import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

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

@observer export class Root extends React.Component {

    logout = () => {
        store.logiar = false;
    }

    render() {
        return (
            <Router>
                <section>
                    {!store.logiar === false &&
                        <div className="menu">
                            <Header
                                logout={this.logout}
                                title="React Seed"
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                                img="./assets/img/logo.png" />
                        </div>
                    }
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