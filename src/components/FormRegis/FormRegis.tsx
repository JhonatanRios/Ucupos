import * as React from 'react';

import './FormRegis.scss';
import { store } from '../../stores/store';
import { Link } from 'react-router-dom';

interface FormRegisProps {
    email: string;
    password: string;
    handleChangeEmail: any;
    handleChangePassword: any;
}

export class FormRegis extends React.Component<FormRegisProps, {}> {

    reviewInputs = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // @ts-ignore
        const value: string = document.getElementById("inputEmail").value;
        // @ts-ignore
        const valu2: string = document.getElementById("inputPassword").value;
        store.autenticate(value, valu2);
    }


    render() {
        return <section className="body">
            <section className="regisPadre">
                <div className="title">
                    <h1>UCupos</h1>
                </div>
                <div className="regisForm">
                    <div className="intro">
                        <h1>¿Que es UCupos?</h1>
                        <ul>
                            <li>Comparte tu vehiculo desde y hacia la universidad</li>
                            <li>Busca cupos al instante</li>
                            <li>Más fácil, rápido, comodo y seguro</li>
                        </ul>
                    </div>
                    <div className="form">
                        <h1 className="titleform">
                            <span>SignIn</span></h1>
                        <form className="custom-form" onSubmit={this.reviewInputs}>
                            <div className="form-group">
                                <input type="email" className="form-control" id='inputEmail' value={this.props.email} onChange={this.props.handleChangeEmail} />
                                <label className="animated-label">Correo</label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id='inputPassword' value={this.props.password} onChange={this.props.handleChangePassword} />
                                <label className="animated-label">Contraseña</label>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <Link to='/Admin'>
                                        <button className="btn btn-primary btn-block" id="regis" type="submit">
                                            Registrar
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    }

}