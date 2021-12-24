import {getAllReviews, deleteReview} from "../../services/api/reviewsApi";

class ShowReviews {
    constructor(container) {
        this.init(container)
    }

    async init(container){
        const data = await getAllReviews()
        this.render(container,data);
        console.log(data)
    }

    render(container,data){
        const ul = document.createElement('ul');
        data.forEach((el)=>{
            const li = document.createElement('li')
            li.id = el.id;
            const name = document.createElement('h1');
            const email = document.createElement('h2');
            const review = document.createElement('p');
            const button = document.createElement('button')

            name.innerHTML = el.name;
            email.innerHTML = el.email;
            review.innerHTML = el.review;
            button.innerHTML = 'X';
            button.id = el.id;

            li.appendChild(name);
            li.appendChild(email);
            li.appendChild(review);
            li.appendChild(button)
            ul.appendChild(li)
        })

        ul.addEventListener('click', async (e)=>{
            if (e.target.tagName === 'BUTTON') {
                console.log(e.target.id)
                await deleteReview(e.target.id)
            }
        });

        container.appendChild(ul);
    }
}

export default ShowReviews