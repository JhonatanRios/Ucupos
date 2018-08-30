import * as React from 'react';
import {Route, Redirect} from "react-router-dom";

import { FormRegis } from '../../components/FormRegis/FormRegis';
import { Admin } from '../../containers/Admin/Admin';
import { store } from '../../stores/store';

interface Props {
}

interface State {
    email: string;
    password: string;
}

export class Registro extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleChangeEmail = (event: any) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event: any) => {
        this.setState({ password: event.target.value })
    }
    register = (event: any) => {
        event.preventDefault;
        /*------------------*/
        store.autenticate(this.state.email, this.state.password);
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('password', this.state.password);
        /*------------------*/
    }

    render() {
        return (
            <FormRegis
                email={this.state.email}
                password={this.state.password}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePassword={this.handleChangePassword}
            />
        )
    }
}