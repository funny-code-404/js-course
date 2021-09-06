class ListItem {
  constructor(container, text, image) {
    this.container = container;
    this.text = text;
    this.image = image;
  }

  createListItem = (container, text, image) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = this.image;

    li.innerHTML = this.text;
    li.appendChild(img);

    this.container.appendChild(li);
  };
}

export default ListItem;
