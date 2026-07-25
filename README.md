# MiniEvent

MiniEvent is a lightweight, zero-dependency event emitter for modern JavaScript applications.

The library provides a simple and predictable way to create, manage, and emit custom events between different parts of an application.

MiniEvent is designed to be small, fast, and easy to understand. It focuses only on the essential features required for event-driven programming without unnecessary abstractions.

## Features

- Zero dependencies
- Lightweight implementation
- Modern ES Module support
- Simple and predictable API
- Fast listener management
- Duplicate listener prevention
- Automatic cleanup of unused events
- Chainable methods
- Safe event emission
- Small and readable codebase

## Why MiniEvent

Event-driven architecture allows different parts of an application to communicate without creating direct dependencies between modules.

MiniEvent provides a minimal solution for creating communication channels between independent components.

## Basic Usage

```javascript
import { MiniEvent } from "minievent";

const events = new MiniEvent();

events.on("message", (text) => {
    console.log(text);
});

events.emit("message", "Hello World");

Adding Listeners

Use the on method to subscribe to events.

events.on("login", (user) => {
    console.log(user);
});

One-Time Listeners

Use the once method for listeners that should execute only one time.

events.once("ready", () => {
    console.log("Ready");
});

Removing Listeners

Use the off method to remove a listener.

events.off("login", handler);

Clearing Events

Remove a specific event:

events.clear("message");

Remove all events:

events.clear();

API

on(event, listener)

Registers a new event listener.

Returns the current MiniEvent instance.

once(event, listener)

Registers a listener that executes only once.

off(event, listener)

Removes a specific event listener.

emit(event, ...args)

Emits an event and passes arguments to listeners.

Returns true if listeners exist, otherwise returns false.

clear(event)

Removes listeners from an event.

Without arguments, removes all events.

has(event)

Checks whether an event exists.

listenerCount(event)

Returns the amount of listeners for an event.

eventCount()

Returns the amount of registered events.

Design Principles

MiniEvent follows several principles:

Small codebase

No unnecessary features

Modern JavaScript standards

Predictable behavior

Simple API

Easy maintenance


Technical Details

MiniEvent uses:

Map for storing events

Set for storing listeners


This provides fast lookup, duplicate prevention, and reliable event management.

Use Cases

MiniEvent can be used for:

Browser applications

Node.js applications

Plugin systems

CLI tools

Games

Internal event buses

Modular architectures


Philosophy

MiniEvent is built around simplicity.

A small and focused library can be easier to understand, maintain, and use than a large solution with unnecessary complexity.

License

MIT License
