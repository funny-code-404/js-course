class Observer {
  constructor() {
    this.__state = {}; // состояние
    this.subcribers = {}; //событие и действие его
  }

  subcriber(type, handler) {
    // добавляет название обработчика и его действие
    this.subcribers[type] = handler;
  }

  unsubcriber(type) {
    // удаляет название обработчика и его действие
    delete this.subcribers[type];
  }

  notify(type) {
    const { state, subcribers } = this;
    const eventHandler = subcribers[type];
    if (eventHandler) {
      eventHandler(state);
    } else {
    }
  }
  get state() {
    return this.__state;
  }
  set state(value) {
    this.__state = value;
    // console.log(`STATE changed`, this.state);
  }
}

const observer = new Observer();

export default observer;
