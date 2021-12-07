import img from "./../img/img";

class Avatar {
  createAvatar() {
    const avatar = document.createElement("img");
    avatar.src = img;
    avatar.classList.add("avatar");
    document.body.appendChild(avatar);
  }
}

export const avatar = new Avatar();
