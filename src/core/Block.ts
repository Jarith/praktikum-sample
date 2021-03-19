import * as nunjucks from 'nunjucks';
import { EventBus } from './EventBus';
import { EVENTS } from './events';

const renderProp = (prop: unknown, template: string): unknown => {
    if (Array.isArray(prop)) {
        return prop.map((value) => renderProp(value, template));
    }

    if (prop instanceof Block) {
        return prop.render(template);
    }

    return prop;
};

export abstract class Block<T extends Record<string, unknown>> {
    private content: string = '';
    private eventBus: EventBus;
    private props: T;

    protected constructor(props: T) {
        this.eventBus = new EventBus();

        this.props = this.makePropsProxy(props);

        this.attachEvents(this.eventBus);
        this.eventBus.emit(EVENTS.FLOW_CDM);
    }

    private attachEvents(eventBus: EventBus): void {
        eventBus.on(EVENTS.FLOW_CDM, this.componentDidMountBase);
        eventBus.on(EVENTS.FLOW_CDU, this.componentDidUpdateBase);
        eventBus.on(EVENTS.FLOW_RENDER, this.render);
    }

    private componentDidMountBase = () => {
        this.componentDidMount(this.props);
        this.eventBus.emit(EVENTS.FLOW_RENDER);
    };

    private componentDidUpdateBase(oldProps: T, newProps: T): void {
        this.componentDidUpdate(oldProps, newProps);
        this.eventBus.emit(EVENTS.FLOW_RENDER);
    }

    private makePropsProxy(props: T) {
        return props;
    }

    public get innerHTML() {
        return this.content;
    }

    public componentDidMount: (oldProps: T) => void = () => {};
    public componentDidUpdate: (oldProps: T, newProps: T) => void = () => {};

    public render(template: string) {
        const props = Object.entries(this.props).reduce(
            (acc, [propName, propValue]) => {
                acc[propName] = renderProp(propValue, template);

                return acc;
            },
            {} as Record<string, unknown>
        );

        this.content = nunjucks.compile(template).render(props);

        return this.innerHTML;
    }

    public setProps(nextProps: T) {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    }
}

export default Block;
