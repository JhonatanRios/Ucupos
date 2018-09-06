import { observable, computed, action } from "mobx";
class Store {
    private usersDb = [{
        correo: 'holaamigo@gmail.com',
        password: '1234'
    }, {
        correo: 'jhonatan@gmail.com',
        password: '1234'
    }, {
        correo: 'karlitos@gmail.com',
        password: '1234'
    }, {
        correo: 'jhonatan@gmail.com',
        password: '1234'
    }];

    @observable cuposDb = [
        {
            id: 1,
            nombre: "Jhonatan",
            placa: "DMI-123",
            partida: "Icesi",
            llegada: "calle36#15-40",
            puestos: 4,
            calificacion: 0,
            contacto: 3156366632,
            viajes: 0,
            hora: "7:00AM",
            dia: 'lunes',
            mapa: "map1"
        },
        {
            id: 2,
            nombre: "Jhonatan Stiven Rios Villa",
            placa: "DMI-220",
            partida: "Icesi",
            llegada: "calle36#15-40",
            puestos: 2,
            calificacion: 100,
            contacto: 3156366632,
            viajes: 4,
            hora: "5:00PM",
            dia: 'martes',
            mapa: "map1"
        },
        {
            id: 3,
            nombre: "Jhonatan Stiven Rios Villa",
            placa: "DMI-220",
            partida: "Icesi",
            llegada: "calle36#15-40",
            puestos: 2,
            calificacion: 100,
            contacto: 3156366632,
            viajes: 4,
            hora: "7:00PM",
            dia: 'jueves',
            mapa: "map1"
        },
        {
            id: 4,
            nombre: "Jhonatan Stiven Rios Villa",
            placa: "DMI-220",
            partida: "calle36#15-40",
            llegada: "Icesi",
            puestos: 2,
            calificacion: 100,
            contacto: 3156366632,
            viajes: 4,
            hora: "5:00PM",
            dia: 'lunes',
            mapa: "map2"
        },
        {
            id: 5,
            nombre: "Jhonatan Stiven Rios Villa",
            placa: "DMI-220",
            partida: "calle36#15-40",
            llegada: "Icesi",
            puestos: 2,
            calificacion: 100,
            contacto: 3156366632,
            viajes: 4,
            hora: "7:00PM",
            dia: 'viernes',
            mapa: "map2"
        },
        {
            id: 6,
            nombre: "Ana Lucumi",
            placa: "AGT-265",
            partida: "Javeriana",
            llegada: "calle36#15-40",
            puestos: 3,
            calificacion: 100,
            contacto: 3155894735,
            viajes: 205,
            hora: "7:00AM",
            dia: 'jueves',
            mapa: "map3"
        },
        {
            id: 7,
            nombre: "Ana Lucumi",
            placa: "AGT-265",
            partida: "Javeriana",
            llegada: "calle36#15-40",
            puestos: 2,
            calificacion: 100,
            contacto: 3155894735,
            viajes: 205,
            hora: "5:00PM",
            dia: 'martes',
            mapa: "map3"
        },
        {
            id: 8,
            nombre: "Ana Lucumi",
            placa: "AGT-265",
            partida: "calle36#15-40",
            llegada: "Javeriana",
            puestos: 2,
            calificacion: 100,
            contacto: 3155894735,
            viajes: 205,
            hora: "5:00PM",
            dia: 'lunes',
            mapa: "map4"
        },
        {
            id: 9,
            nombre: "Ana Lucumi",
            placa: "AGT-265",
            partida: "calle36#15-40",
            llegada: "Javeriana",
            puestos: 2,
            calificacion: 100,
            contacto: 3155894735,
            viajes: 205,
            hora: "5:00PM",
            dia: 'martes',
            mapa: "map4"
        }
    ];

    @observable logedCorreo: string = "";
    @observable logedpassword: string = "";
    @observable logiar: boolean = true;
    @observable errorloged: boolean = true;
    @observable mostrarMap: boolean = true;
    @observable selecionado: any = null;
    @observable historia: any = [];

    @observable filters: any = {
        dia: null,
        hora: null,
        partida: null,
        llegada: null,
    };

    @action setfilter(filter: string, value: string) {
        this.filters[filter] = value;
    }

    @computed get listaFiltrada(): any {
        return this.cuposDb.filter((el) => {
            if (this.filters.partida !== null) {
                return el.partida === this.filters.partida
            }
            if (this.filters.llegada !== null) {
                return el.llegada === this.filters.llegada
            }
            if (this.filters.hora !== null) {
                return el.hora === this.filters.hora
            }
            if (this.filters.dia !== null) {
                return el.dia === this.filters.dia
            }
        });
    }

    @action histoList(agre: any) {
        this.historia=agre
        //this.historia.push(agre)
    }


    @action selec(sleccion: any) {
        this.selecionado = sleccion
    }

    @action autenticate = (user: string, password: string) => {

        const found = this.usersDb.find((element) => {
            return element.correo === user && element.password == password;
        });

        if (typeof found == "undefined") {
            console.log('usuario o contraseña incorrecta')
            this.logiar = false;
        } else {
            console.log('usuario encontrado', found);
            this.logiar = true;
        }

        return this.logiar;
    }

}
export const store = new Store();