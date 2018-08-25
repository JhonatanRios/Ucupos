import * as React from 'react';

import { FormRegis } from '../../components/FormRegis/FormRegis';

export class Registro extends React.Component {
    render() {
        return (
                <FormRegis title="React Seed"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                    img="./assets/img/logo.png" />
        )
    }
}