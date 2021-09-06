
import './styles/styles';
import data from '@assets/data';
import image from '@assets/octo';

import ListItem from './components/ListItem'

const ul = document.createElement('ul');
data.users.forEach(({name}) => {
 const ListItemElement = new ListItem(ul,name,image);
 ListItemElement.createListItem();
    
});



document.body.insertAdjacentElement('afterbegin', ul);