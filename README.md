# MiniEvent

MiniEvent is a lightweight, zero-dependency event emitter for modern JavaScript applications.

The library provides a simple and predictable way to create, manage, and emit custom events between different parts of an application. It is designed to be small, fast, and easy to understand while keeping a clean and modern API.

MiniEvent focuses only on the essential features of event-driven programming without unnecessary abstractions. The entire implementation is built around simplicity, performance, and maintainability.

Features

- Zero dependencies
- Lightweight implementation
- Modern JavaScript support
- ES Module support
- Simple event-based API
- Fast listener management using Map and Set
- Duplicate listener prevention
- Automatic cleanup of empty events
- Chainable methods
- Safe event emission
- Small and readable codebase

Why MiniEvent

Many applications need a way for different modules to communicate without creating direct dependencies between them.

An event emitter allows one part of an application to send notifications while other parts can subscribe and react independently.

MiniEvent provides this functionality with a minimal amount of code while keeping the API clear and predictable.

Basic Usage

import { MiniEvent } from "minievent";

const events = new MiniEvent();

events.on("message", (text) => {
    console.log(text);
});

events.emit("message", "Hello World");

Event Listeners

Listeners can be added using the "on" method.

events.on("userLogin", (user) => {
    console.log(user);
});

A listener can receive any number of arguments passed through the event.

events.emit("userLogin", {
    name: "Timur",
    role: "developer"
});

One-Time Events

The "once" method creates a listener that will be removed automatically after the first execution.

events.once("ready", () => {
    console.log("Application started");
});

Removing Listeners

Specific listeners can be removed using the "off" method.

function handler() {
    console.log("Event fired");
}

events.on("click", handler);

events.off("click", handler);

Clearing Events

MiniEvent allows removing listeners from a specific event or clearing all registered events.

Remove one event:

events.clear("message");

Remove all events:

events.clear();

API

on(event, listener)

Registers a new event listener.

Returns the current MiniEvent instance.

---

once(event, listener)

Registers a listener that runs only once.

After execution, the listener is automatically removed.

---

off(event, listener)

Removes a specific listener from an event.

---

emit(event, ...args)

Emits an event and passes arguments to all registered listeners.

Returns "true" if listeners were found, otherwise returns "false".

---

clear(event)

Removes listeners.

If an event name is provided, only that event will be removed.

If no argument is provided, all events will be removed.

---

has(event)

Checks whether an event exists.

Returns a boolean value.

---

listenerCount(event)

Returns the number of listeners registered for an event.

---

eventCount()

Returns the number of registered events.

Design Principles

MiniEvent follows several simple principles:

- Keep the implementation small.
- Avoid unnecessary complexity.
- Use modern JavaScript features.
- Provide predictable behavior.
- Make the API easy to learn.
- Keep performance consistent.

Every method has a specific responsibility, making the library easy to maintain and extend.

Use Cases

MiniEvent can be used for:

- Application communication
- Browser projects
- Node.js applications
- Plugin systems
- Game development
- CLI applications
- Internal event buses
- Modular architectures
- Small JavaScript libraries

Technical Details

MiniEvent uses "Map" for storing events and "Set" for storing listeners.

This approach provides:

- Fast event lookup.
- Automatic prevention of duplicate listeners.
- Simple listener management.
- Reliable cleanup behavior.

During event emission, listeners are safely copied before execution. This allows listeners to remove themselves or modify subscriptions without breaking the event cycle.

Philosophy

MiniEvent is built around the idea that a useful library does not need to be large.

A small, focused, and well-designed tool can often be easier to use and maintain than a large framework with many unnecessary features.

MiniEvent provides only what is needed for event-driven programming and avoids adding features that do not belong in a minimal event emitter.

License

MIT License
