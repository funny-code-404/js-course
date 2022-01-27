import observer from "../../utils/observer";
import {DATA_RECEIVED} from "../../events";
import {createReview} from "../../services/api/reviewsApi";
import ShowReviews from "../showReviews";

class Form{
    constructor(container) {
         return this.init(container);
    }

    getData(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(data => data.json())
            .then(data => {
                console.log('event emitted')
                observer.state = data;
                observer.notify(DATA_RECEIVED);
            });
    }

    init(container){
        //this.getData();
        return this.render(container);
    }

    handlerSubmit = async (container,e) => {
        e.preventDefault();

        const inputs = [...e.target.elements];
        const data = inputs.reduce(
            (acc, input)=>{
                if (input.name){
                    acc[input.name] = input.value;
                }
            return acc;
        }, {});
       await createReview(data);
       new ShowReviews(container)
    }

    render(container) {
        const divMain = document.createElement('div')
        const form = document.createElement('form');
        form.classList.add('form');
        form.addEventListener('submit', this.handlerSubmit.bind(null, container));

        const name = document.createElement('input');
        const email = document.createElement('input');
        const review = document.createElement('input');
        const button = document.createElement('button');

        name.id = 'name';
        name.name = 'name';
        name.placeholder = 'name'
        email.id = 'email';
        email.name = 'email';
        email.placeholder = 'email'
        review.id = 'review';
        review.name = 'review';
        review.placeholder= 'review'

        button.innerHTML = 'send request';

        form.appendChild(name);
        form.appendChild(email);
        form.appendChild(review);
        form.appendChild(button);
        divMain.append(form)

        container.append(divMain)
    }
}

export default Form