export const EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
} as const;

export type Event = typeof EVENTS[keyof typeof EVENTS];