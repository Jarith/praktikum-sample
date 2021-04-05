import { Block } from '../../../../core';
import { Input } from '../../../../components';
import { template } from './template';

type Props = {
    PhotoInput: Input;
    FileInput: Input;
    LocationInput: Input;
};

export class ChatActions extends Block<Props> {
    constructor(props: Props) {
        super(props, template(
            props.PhotoInput.content,
            props.FileInput.content,
            props.LocationInput.content
        ));
    }
}
