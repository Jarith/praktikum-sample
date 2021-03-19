import type { Collection } from '../types';
import type { Event } from './events';

export type EventListener = Function;
export type EventListenerCollection = Collection<EventListener[], Event>;

export class EventBus {
    private listeners: EventListenerCollection

    constructor() {
        this.listeners = {};
    }

    private getListeners(event: Event): EventListener[] {
        return this.listeners[event] || [];
    }

    on(event: Event, listener: EventListener): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [listener];
            return;
        }

        this.listeners[event]?.push(listener);
    }

    off(event: Event, listener: EventListener): void {
        this.listeners[event] = this.getListeners(event).filter(
            (cb) => cb !== listener
        );
    }

    emit(event: Event, ...args: any[]): void {
        for (const listener of this.getListeners(event)) {
            listener(...args);
        }
    }
}

export default EventBus;