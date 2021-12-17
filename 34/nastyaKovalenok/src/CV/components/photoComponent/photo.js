import photo from '../../assets/photo.jpg'
import './photoStyle.css'

export function createPhoto() {
    const div = document.createElement('div')
    const img = document.createElement('img');
    img.src = photo;
    div.append(img);
    div.classList.add('photo');
    return div;
}