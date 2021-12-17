import {cvComponent} from "../../CV";

class CVPage {
    constructor() {
        return this.init()
    }

    init() {
        return this.render()
    }

    render() {
        const divCV = document.createElement('div')
        cvComponent(divCV)
        return divCV
    }
}

export default CVPage