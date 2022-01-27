class Observer {
  constructor() {
    this.__state = {};
    this.subscribers = {};
  }

  subscribe(type, handler) {
    this.subscribers[type] = handler;
    console.log(`STATE changed`, this.state);
  }

  unsubscribe(type) {
    delete this.subscribers[type];
  }

  notify(type) {
    const { state, subscribers } = this;
    const eventHandler = subscribers[type];
    if (eventHandler) {
      eventHandler(state);
    }
  }

  get state() {
    return this.__state;
  }
  set state(value) {
    this.__state = value;
    console.log(`STATE changed`, this.state);
  }
}

export const observer = new Observer();
