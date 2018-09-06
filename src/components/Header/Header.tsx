import * as React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

interface HeaderProps {
    title: string;
    text?: string;
    img?: string;
    logout: any;
}

export const Header = (props: HeaderProps) => {
    return (
        <header className="header">
            <nav className="menu">
                <div className="logo">
                    <img src={props.img} alt="" />
                    <a href="#" className="btn-menu" id="btn-menu">
                        <i className="icono fa fa-bars" aria-hidden="true">
                        </i>
                    </a>
                </div>
                <div className="enlaces" id="enlaces">
                    <Link to='/publicar' className="public hvr-underline-from-left">
                        Publicar
                    </Link>
                    <Link to='/admin' className="cupos hvr-underline-from-left">
                        Cupos
                    </Link>
                    <Link to='/historial' className="historial hvr-underline-from-left">
                        Historial
                    </Link>
                </div>

                <div className="enlaces salir" id="salir" onClick={(ev) => {
                    ev.preventDefault();
                    props.logout();
                }}>
                    <Link to='/' className="historial hvr-pop">
                        LogOut
                    </Link>
                </div>
            </nav>
        </header>
    );
}