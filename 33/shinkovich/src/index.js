import './styles/styles';
import data from '@assets/data';
import image from '@assets/octocat';
import ListItem from './components/ListItem';


import html from "./partials/inProgress.html";//!!!!!!!!!!!!!


const ul = document.createElement('ul');

data.users.forEach(({ name }) => {
	const ListItemElement = new ListItem(ul, name, image);
	ListItemElement.createListItem();

});

document.body.insertAdjacentElement('afterbegin', ul);






//!!!!!!!!!!!!!!!!!!!!!!!!

//добавление html блока inProgr
let app = document.querySelector('#app');
app.innerHTML = html;
