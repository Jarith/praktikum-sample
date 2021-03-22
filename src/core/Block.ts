import * as nunjucks from 'nunjucks';
import { EventBus } from './EventBus';
import { EVENTS } from './events';

const renderProp = (prop: unknown): unknown => {
    if (Array.isArray(prop)) {
        return prop.map((value) => renderProp(value));
    }

    if (prop instanceof Block) {
        return prop.content;
    }

    return prop;
};

export abstract class Block<T extends Record<string, unknown>> {
    public content: string = '';
    private eventBus: EventBus;
    private props: T;
    private template: string;

    protected constructor(props: T, template: string) {
        this.eventBus = new EventBus();

        this.props = this.makePropsProxy(props);
        this.template = template;

        this.attachEvents(this.eventBus);
        this.eventBus.emit(EVENTS.FLOW_CDM);
    }

    private attachEvents = (eventBus: EventBus) => {
        eventBus.on(EVENTS.FLOW_CDM, this.componentDidMountBase);
        eventBus.on(EVENTS.FLOW_CDU, this.componentDidUpdateBase);
        eventBus.on(EVENTS.FLOW_RENDER, this.render);
    }

    private componentDidMountBase = () => {
        this.componentDidMount(this.props);
        this.eventBus.emit(EVENTS.FLOW_RENDER);
    };

    private componentDidUpdateBase = (oldProps: T, newProps: T) => {
        this.componentDidUpdate(oldProps, newProps);
        this.eventBus.emit(EVENTS.FLOW_RENDER);
    }

    private makePropsProxy = (props: T) => {
        return props;
    }

    public get innerHTML() {
        return this.content;
    }

    public componentDidMount: (oldProps: T) => void = () => {};
    public componentDidUpdate: (oldProps: T, newProps: T) => void = () => {};

    public render = () => {
        if (!this.template) {
            return this.content;
        }
        
        const props = Object.entries(this.props).reduce(
            (acc, [propName, propValue]) => {
                acc[propName] = renderProp(propValue);

                return acc;
            },
            {} as Record<string, unknown>
        );

        this.content = nunjucks.compile(this.template).render(props);

        return this.content;
    }

    public setProps = (nextProps: T) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    }
}

export default Block;
