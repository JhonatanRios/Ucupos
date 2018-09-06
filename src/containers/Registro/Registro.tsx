import * as React from 'react';
import { withRouter } from 'react-router';

import { FormRegis } from '../../components/FormRegis/FormRegis';

interface Props {
    history: any;
    match: any;
    location: any;
}

interface State {
    email: string;
    password: string;
}

class RegistroTemp extends React.Component<Props, State>{
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
        this.props.history.push('/Admin')
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

export const Registro = withRouter(RegistroTemp);