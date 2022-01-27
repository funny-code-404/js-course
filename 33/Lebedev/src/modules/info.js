class Info {
  createInfo() {
    let p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quasi in cupiditate, veniam illo laborum cumque corrupti non enim ducimus?";
    p.classList.add("info");
    document.body.append(p);
  }
}

export const info = new Info();
