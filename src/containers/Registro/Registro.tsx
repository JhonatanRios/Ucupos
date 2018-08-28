import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FormRegis } from '../../components/FormRegis/FormRegis';
import { Admin } from '../Admin/Admin';

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
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('password', this.state.password);
        /*------------------*/
        <Router>
            <Route path="/admin" component={Admin} />
        </Router>
    }

    render() {
        return (
            <FormRegis
                email={this.state.email}
                password={this.state.password}
                register={this.register}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePassword={this.handleChangePassword}
            />
        )
    }
}