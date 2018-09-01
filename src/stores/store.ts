import { observable, computed, action } from "mobx";
class Store {
    private usersDb = [{
        correo: 'holaamigo@gmail.com',
        password: '1234'
    }, {
        correo: 'karlitos@gmail.com',
        password: '1234'
    }, {
        correo: 'jhonatan@gmail.com',
        password: '1234'
    }];

    @observable logedCorreo: string = "";
    @observable logedpassword: string = "";
    @observable logiar: boolean = false;
    @observable errorloged: boolean = true;

    @action autenticate = (user: string, password: string) => {

        const found = this.usersDb.find((element) => {
            console.log(element)
            return element.correo === user && element.password == password;
        });

        console.log("el objeto es:" + found);

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