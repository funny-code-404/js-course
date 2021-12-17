export const createBio = () => {
  const bio = document.createElement('span');
  bio.className = 'bio';
  const name = document.createElement('p');
  const age = document.createElement('p');
  const profession = document.createElement('p');
  profession.innerHTML = 'Profession: Programmer'
  name.innerHTML =     'Name: Ivanov Ivan Ivanovich';
  age.innerHTML = 'Age: 23';
  bio.appendChild(name);
  bio.appendChild(age);
	bio.appendChild(profession);
	return bio;
}