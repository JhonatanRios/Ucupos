import * as React from 'react';

import './FormRegis.scss';

interface FormRegisProps {
    title: string;
    text?: string;
    img?: string;
}

export const FormRegis = ({ title, text, img }: FormRegisProps) => {
    return (
        <section className="body">
            <section className="loginPadre">
                <div className="title">
                    <h1>UCupos</h1>
                </div>
                <div className="loginForm">
                    <div className="intro">
                        <div className="logoCont">
                            <img src="" alt="Logo Cupos ICESI" className="logo" />
                        </div>
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
                        <form action="#" className="custom-form">
                            <div className="form-group" ng-class="{'not-empty': userName.length}">
                                <input type="text" className="form-control" name="user" id="user" ng-model="userName" />
                                <label className="animated-label">Correo</label>
                            </div>
                            <div className="form-group" ng-class="{'not-empty': passWord.length}">
                                <input type="password" className="form-control" name="pass" id="pass" ng-model="passWord" />
                                <label className="animated-label">Contraseña</label>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis">Registrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section >
    );
}