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
    private logedpassword: string = "";

    @action autenticate = (user: string, password: string) => {

    const found = this.usersDb.find((element) => {
    return element.correo === user && element.password == password;
    });
    if(found ==null){
        console.log('usuario o contraseña incorrecta')
    } else {
        console.log('usuario encontrado', found);
    }

    }

}
export const store = new Store();