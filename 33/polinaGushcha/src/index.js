import './styles/style'; //
import data from './assets/data';
import img from './assets/cat';
import { personalInformation } from './personalInformation/index';
import { autobiography } from './autobiography/index';


class User {
  addUserPhoto (){
    const image = document.createElement('img');
    image.src = img;
    document.body.appendChild(image);
    console.log(data);
    personalInformation(document.body);
    autobiography(document.body);
  }
}
const user = new User();
user.addUserPhoto();