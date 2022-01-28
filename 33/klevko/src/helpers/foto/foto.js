import foto from "../../assets/foto.jpg";
import "./style.css";

export function createFoto() {
  const div = document.createElement("div");
  const image = document.createElement("img");

  image.src = foto;
  div.appendChild(image);
  div.classList.add("foto");
  image.classList.add("backgroundFoto");
  return div;
}
