import * as React from 'react';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

import './FormLogin.scss';

interface FormLoginProps {
    email: string;
    password: string;
    login: any;
    handleChangeEmail: any;
    handleChangePassword: any;
    errorLogged: boolean;
}

export const FormLogin = observer((props: FormLoginProps) => {
    return (
        <section className="login">
            <section className="loginPadre">
                <div className="title">
                    <h1>UCupos</h1>
                </div>
                <div className="loginForm">
                    <div className="intro">
                        <div className="logoCont">
                            <img src="" alt="Logo Cupos ICESI" className="logo" />
                        </div>
                        <h1>Te damos la bienvenida</h1>
                        <ul>
                            <li>Comparte tu vehiculo desde y hacia la universidad</li>
                            <li>Busca cupos al instante</li>
                            <li>Más fácil, rápido, comodo y seguro</li>
                        </ul>
                    </div>
                    <div className="form">
                        <h1 className="titleform">
                            <span>Login</span></h1>
                        <form className="custom-form" >
                            <div className="form-group">
                                <input type="email" className="form-control" value={props.email} onChange={props.handleChangeEmail} />
                                <label className="animated-label">Correo</label>
                            </div>
                            <div className="form-group">
                                <input type="pass" className="form-control" value={props.password} onChange={props.handleChangePassword} />
                                <label className="animated-label">Contraseña</label>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit" onClick={(ev) => {
                                        ev.preventDefault();
                                        props.login();
                                    }}>Ingresar</button>
                                </div>
                            </div>
                            {store.errorloged===false &&
                            <div>
                                <h2>Las Credenciales no son Correctas</h2>
                            </div>
                        }
                        </form>
                    </div>
                </div>
                <div className="noCuenta">
                    <Link to='/regist' className="public textNoCuenta">
                        No tienes una <span>cuenta?</span>
                    </Link>
                </div>
            </section>
        </section>
    );
})