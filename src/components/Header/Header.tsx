import * as React from 'react';

import './Header.scss';

interface HeaderProps {
    title: string;
    text?: string;
    img?: string;
}

export const Header = ({ title, text, img }: HeaderProps) => {
    return <header className="header">
        <nav className="menu">
            <div className="logo">
                <img src={img} alt="" />
                <a href="#" className="btn-menu" id="btn-menu">
                    <i className="icono fa fa-bars" aria-hidden="true">
                    </i>
                </a>
            </div>

            <div className="enlaces" id="enlaces">
                <a className="publicar hvr-underline-from-left" href="/">Publicar</a>
                <a className="cupos hvr-underline-from-left" href="/">Cupos</a>
                <a className="historial hvr-underline-from-left" href="/">Historial</a>
            </div>

            <div className="enlaces salir" id="salir">
                <a className="logOut" href="/">LogOut</a>
            </div>
        </nav>
    </header>;
}