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
            nombre: "Jhonatan Stiven Rios Villa",
            placa: "DMI-220",
            partida: "Icesi",
            llegada: "calle 36 # 15 - 40",
            puestos: 3,
            calificacion: 4,
            contacto: 3156366632,
            viajes: 4,
            hora: "3:00 PM",
            dia: 'lunes',
            mapa: "./assets/img/map.png"
        },
        {
            id: 2,
            nombre: "Jhonatan Stiven Rios Villa",
            placa: "DMI-220",
            partida: "calle 36 # 15 - 40",
            llegada: "Icesi",
            puestos: 3,
            calificacion: 4,
            contacto: 3156366632,
            viajes: 4,
            hora: "7:00 AM",
            dia: 'martes',
            mapa: "./assets/img/map.png"
        },
        {
            id: 3,
            nombre: "Daniel Burbano",
            placa: "DAY-460",
            partida: "Javeriana",
            llegada: "calle 36 # 15 - 40",
            puestos: 2,
            calificacion: 5,
            contacto: 3156366632,
            viajes: 10,
            hora: "3:00 PM",
            dia: 'lunes',
            mapa: "./assets/img/map.png"
        },
        {
            id: 4,
            nombre: "Daniel Burbano",
            placa: "DAY-460",
            partida: "Javeriana",
            llegada: "calle 36 # 15 - 40",
            puestos: 2,
            calificacion: 5,
            contacto: 3156366632,
            viajes: 10,
            hora: "3:00 PM",
            dia: 'martes',
            mapa: "./assets/img/map.png"
        },
        {
            id: 5,
            nombre: "Daniel Burbano",
            placa: "DAY-460",
            partida: "Javeriana",
            llegada: "calle 36 # 15 - 40",
            puestos: 2,
            calificacion: 5,
            contacto: 3156366632,
            viajes: 10,
            hora: "3:00 PM",
            dia: 'miercoles',
            mapa: "./assets/img/map.png"
        },
        {
            id: 6,
            nombre: "Jhonatan Stiven Rios Villa",
            placa: "DMI-220",
            partida: "calle 36 # 15 - 40",
            llegada: "Javeriana",
            puestos: 2,
            calificacion: 5,
            contacto: 3156366632,
            viajes: 10,
            hora: "7:00 AM",
            dia: 'lunes',
            mapa: "./assets/img/map.png"
        }
    ];

    @observable logedCorreo: string = "";
    @observable logedpassword: string = "";
    @observable logiar: boolean = false;
    @observable errorloged: boolean = true;
    @observable mostrarMap: boolean = true;

    @computed get lunes(): any {
        return this.cuposDb.filter(function (el) {
            return el.dia === 'lunes'
        });
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

    /*@action buscador = (id:number) => {

        const found = this.cuposDb.find((element) => {
            return element.id === id;
        });

        console.log("el objeto es:" + found);

        if (typeof found == "undefined") {
            console.log('Busqueda Incorrecta')
            this.mostrarMap = false;
        } else {
            console.log('Su Busqueda Es :', found);
            this.mostrarMap = true;
        }

        return this.mostrarMap;
    }*/

}
export const store = new Store();