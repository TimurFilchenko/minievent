export class MiniEvent {
    #events = new Map();

    on(event, listener) {
        if (typeof listener !== "function") {
            throw new TypeError("Listener must be a function.");
        }

        const listeners = this.#events.get(event);

        if (listeners) {
            listeners.add(listener);
        } else {
            this.#events.set(event, new Set([listener]));
        }

        return this;
    }

    once(event, listener) {
        if (typeof listener !== "function") {
            throw new TypeError("Listener must be a function.");
        }

        const wrapper = (...args) => {
            this.off(event, wrapper);
            listener(...args);
        };

        return this.on(event, wrapper);
    }

    off(event, listener) {
        const listeners = this.#events.get(event);

        if (!listeners) {
            return this;
        }

        listeners.delete(listener);

        if (listeners.size === 0) {
            this.#events.delete(event);
        }

        return this;
    }

    emit(event, ...args) {
        const listeners = this.#events.get(event);

        if (!listeners) {
            return false;
        }

        for (const listener of [...listeners]) {
            listener(...args);
        }

        return true;
    }

    clear(event) {
        if (event === undefined) {
            this.#events.clear();
        } else {
            this.#events.delete(event);
        }

        return this;
    }

    has(event) {
        return this.#events.has(event);
    }

    listenerCount(event) {
        return this.#events.get(event)?.size ?? 0;
    }

    eventCount() {
        return this.#events.size;
    }
}
