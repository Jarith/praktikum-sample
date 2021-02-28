import { Block } from '../../core/Block';
import { template } from './template';

type Props = {
    src?: string;
    alt?: string;
    height?: number;
    width?: number;
    className?: string;
};

export class Image extends Block<Props> {
    constructor(props: Props) {
        super({
            src: 'https://via.placeholder.com/150',
            alt: 'Image',
            height: 150,
            width: 150,
            ...props,
        });
    }

    public render() {
        return super.render(template);
    }
}
