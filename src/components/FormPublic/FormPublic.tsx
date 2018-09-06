import * as React from 'react';

import './FormPublic.scss';

interface FormPublicProps {
    title: string;
    text?: string;
    img?: string;
}

export const FormPublic = (props: FormPublicProps) => {
    return (
        <section className="publica">
            <section className="publicPadre">
                <div className="title">
                    <h1>Publica Tu Ruta</h1>
                </div>
                <div className="publicForm">
                    <div className="informacion">
                        <div className="persoDesc">

                            <h1 className="titleInfo">Conductor</h1>
                            <input type="text" name="" id="" placeholder="ej: casual" />

                            <h1 className="titleInfo">Placa</h1>
                            <input type="text" name="" id="" placeholder="ej: DMI-220" />

                            <h1 className="titleInfo">Contacto: </h1>
                            <input type="text" name="" id="" placeholder="ej: 3156366632" />

                            <h1 className="titleInfo">Cupos disponibles</h1>
                            <input type="number" min="1" max="4" placeholder="ej: 3" />

                        </div>
                        <div className="infoDesc">

                            <h1 className="titleInfo">Fecha</h1>
                            <div className="cont-sel">
                            <select className="sel" name="Semana">
                                <option value="lunes">Lunes</option>
                                <option value="martes">Martes</option>
                                <option value="miercoles">Miercoles</option>
                                <option value="jueves">Jueves</option>
                                <option value="viernes">Viernes</option>
                            </select>
                            </div>
                            

                            <h1 className="titleInfo">Hora</h1>
                            <div className="cont-sel">
                            <select className="sel" name="Hora">
                                <option value="7:00">7:00 a.m.</option>
                                <option value="5:00">5:00 p.m.</option>
                            </select>
                            </div>
                            



                            <h1 className="titleInfo">Punto de Partida</h1>
                            <input type="text" name="" id="" placeholder="ej: Icesi" />


                            <h1 className="titleInfo">Punto de LLegada</h1>
                            <input type="text" name="" id="" placeholder="ej: calle36#15-40" />

                        </div>
                    </div>
                    <div className="publi">
                        <div className="submit">
                            <button className="btn btn-primary btn-block" id="publi" type="submit">Publicar</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}