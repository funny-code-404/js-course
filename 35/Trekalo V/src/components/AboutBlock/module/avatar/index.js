import img from "./image/img.jpg";
import "./style.scss";

export function createSrcImg() {
  const avatarWrapper = document.createElement("div");
  avatarWrapper.classList.add("avatar_img");
  const image = document.createElement("img");
  image.src = img;
  avatarWrapper.append(image);
  return avatarWrapper;
}
