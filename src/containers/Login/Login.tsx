import * as React from 'react';
import { withRouter } from 'react-router';
import { observer } from 'mobx-react';

import { FormLogin } from '../../components/FormLogin/FormLogin';
import { store } from '../../stores/store';

interface Props {
    history: any;
    match: any;
    location: any;
}

interface State {
    email: string;
    password: string;
    errorLogged: boolean;
}

@observer class LoginTemp extends React.Component<Props, State>{

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

    login = () => {

        /*----------*/
        if (store.autenticate(this.state.email, this.state.password)===true) {
            console.log ("entra hasta: autenticate")
            this.props.history.push('/Admin')
            store.errorloged=true;
        } else {
            console.log ("no entra hasta: autenticate")
            store.errorloged=false;
        };
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

export const Login = withRouter(LoginTemp);