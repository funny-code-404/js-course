class Observer {
    constructor() {
        this.__state = {};
        this.subcribers = {};
    }

    subscribe(type, handler){
        this.subcribers[type] = handler;

    }

    unsubscribe(type){
        delete this.subcribers[type];
    }

    notify(type) {
        const { state, subscribers } = this;
        const eventHandler = subscribers[type]

        if (eventHandler) {
            eventHandler(state);
        }
    }

    get state() {
        return this.__state;
    }

    set state(value) {
        this.__state = value;

        console.log(this.state)
    }
}

const observer = new Observer();

export default observer