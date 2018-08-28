import * as React from 'react';

import { FormLogin } from '../../components/FormLogin/FormLogin';

interface Props {

}

interface State {
    email: string;
    password: string;
    errorLogged: boolean;
}

export class Login extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorLogged: false,
        }
    }

    handleChangeEmail = (event: any) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event: any) => {
        this.setState({ password: event.target.value })
    }

    login = (event: any) => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        /*----------*/
        if (this.state.email === email && this.state.password === password) {
            console.log("holi");
        }
        this.setState({
            errorLogged:true
        })
    }


    render() {
        return (
            <FormLogin
                email={this.state.email}
                password={this.state.password}
                login={this.login}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePassword={this.handleChangePassword}
                errorLogged={this.state.errorLogged}
            />
        )
    }
}