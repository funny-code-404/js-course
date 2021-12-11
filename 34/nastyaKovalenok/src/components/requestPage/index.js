import {getData} from "../../fetchRequest";
import './style.css'

class RequestPage {

    constructor(container) {
        return this.init(container)
    }

    init(container) {
        getData().then(data => this.render(data, container))
    }

    render(data,container) {
        const divEl = document.createElement('div');
        const ul = document.createElement('ul');
        data.forEach((item) => {
            const li = document.createElement('li')
            li.textContent = `id:${item.id} , name:${item.name}, user.name:${item.username}, email:${item.email}`
            ul.append(li)
        })
        divEl.append(ul);
        container.append(divEl)

        return divEl
    }
}

export default RequestPage