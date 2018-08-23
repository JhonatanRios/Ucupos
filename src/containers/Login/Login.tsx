import * as React from 'react';

import { FormLogin } from '../../components/FormLogin/FormLogin';

export class Login extends React.Component {
    render() {
        return (
                <FormLogin title="React Seed"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                    img="./assets/img/logo.png" />
        )
    }
}