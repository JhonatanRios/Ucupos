import * as React from 'react';
import { FormPublic } from '../../components/FormPublic/FormPublic';

export class Publicar extends React.Component {
    render() {
        return (
            <section className="publicar">
            <FormPublic title="React Seed"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                    img="./assets/img/logo.png" />
            </section>
        )
    }
}