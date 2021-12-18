import {getAllComments, getSingleComments} from "../../services/api/commentsApi";
import "./style.css"

class DataBlock {
    constructor(container) {
        this.init(container);
    }

    async init(container){
        const data = await getAllComments();
        this.render(container,data);
    }

    renderList(data, container){
        const divEl = document.createElement('div');
        const ul = document.createElement('ul');
        data.forEach(({id, name}) => {
            const li = document.createElement('li')
            const button = document.createElement('button');
            button.classList.add('openDetails')
            button.addEventListener('click', this.renderDetails.bind(null, container))
            button.innerHTML = 'Открыть'
            button.id = id
            li.textContent =  `${name}`;
            li.append(button)
            ul.append(li)
        })
        divEl.append(ul);
        return divEl
    }

    async renderDetails(container, e){
        const data = await getSingleComments(e.target.id)
        console.log(data)
        const divDetails = document.createElement('div');
        divDetails.innerHTML = `
            <div>Id: ${data.id}</div>
            <div>Name: ${data.name}</div>
            <div>Username: ${data.username}</div>
            <div>Email: ${data.email}</div>
            <div>Phone: ${data.phone}</div>
            <div>Website: ${data.website}</div>
            <hr>
            `
        container.append(divDetails)
    }

    render(container,data){
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main-dive')
        mainDiv.innerHTML = 'List Users';
        mainDiv.append(this.renderList(data, mainDiv))
        container.appendChild(mainDiv);
    }
}

export default DataBlock