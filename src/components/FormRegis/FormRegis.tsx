import * as React from 'react';

import './FormRegis.scss';

interface FormRegisProps {
    email: string;
    password: string;
    register: any;
    handleChangeEmail: any;
    handleChangePassword: any;
}

export const FormRegis = (props: FormRegisProps) => {
    return (
        <section className="body">
            <section className="regisPadre">
                <div className="title">
                    <h1>UCupos</h1>
                </div>
                <div className="regisForm">
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
                        <form action="/admin" className="custom-form" onSubmit={props.register}>
                            <div className="form-group">
                                <input type="email" className="form-control" value={props.email} onChange={props.handleChangeEmail} />
                                <label className="animated-label">Correo</label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" value={props.password} onChange={props.handleChangePassword} />
                                <label className="animated-label">Contraseña</label>
                            </div>
                            <div className="contSubmit">
                                <div className="submit">
                                    <button className="btn btn-primary btn-block" id="regis" type="submit">Registrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    );
}