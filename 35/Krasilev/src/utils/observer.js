class Observer {
  constructor() {
    this._state = {};

    this.subscribers = {};
  }

  subscribe(type, handler) {
    this.subscribers[type] = handler;
  }

  unsubscribe(type) {
    delete this.subscribers[type];
  }

  get state() {
    return this._state;
  }

  set state(data) {
    this._state = data;
  }

  notify(type) {
    const { state } = this;

    if (this.subscribers[type]) {
      this.subscribers[type](state);
    }
  }
}

export default new Observer();
