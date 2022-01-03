import {dataFromServer} from "./data";
class RequirementBlock {
  constructor(container) {
    this.init(container);
  }

  init(container) {
    dataFromServer().then(data => this.render(data, container));
  }

  render(data, container) {
      class User {
        addJsProject () {
          const div = document.createElement('div');
          const ul = document.createElement('ul');
          console.log(data);
          data.forEach((e) => {
              const li = document.createElement('li');
              li.innerText = `name:${e.id}`;
              ul.append(li);
              const btn = document.createElement('button');
              btn.innerHTML = 'details';
              li.appendChild(btn);

              const detailsUl = document.createElement('ul');
              const detailsLi = document.createElement('li');
              detailsLi.innerText = `userId:${e.userId}, id:${e.id}, body:${e.body}, title:${e.title}`;
              detailsUl.appendChild(detailsLi);
              li.appendChild(detailsUl);

              detailsUl.style.display = 'none';

              btn.onclick = function () {
                if(detailsUl.style.display === 'none') {
                  detailsUl.style.display = 'block';
                  console.log(e);
                } else if (detailsUl.style.display === 'block') {
                  detailsUl.style.display = 'none';
                }
              }
          });
          div.append(ul);
          container.append(div);
          return div;
          };
      };
      const user = new User();
      user.addJsProject();
  };
};

export default RequirementBlock;