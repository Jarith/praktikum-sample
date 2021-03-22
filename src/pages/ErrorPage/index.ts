import { Block } from '../../core';
import { Link } from '../../components';
import { template } from './template';

import './styles.css';

type OwnProps = {
    title: string;
    description: string;
};

type Props = OwnProps & {
    Link: Link;
};

const getDeps = () => ({
    Link: new Link({
        title: 'На главную',
        href: './index.html',
    }),
});

export class ErrorPage extends Block<Props> {
    constructor(ownProps: OwnProps) {
        const props = {
            ...getDeps(),
            ...ownProps,
        };

        super(props, template);
    }
}
