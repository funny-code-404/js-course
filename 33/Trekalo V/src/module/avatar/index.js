import img from "@module/avatar/image/img.jpg";



export function createSrcImg(anchor) {
  const image = document.createElement("img");
  image.src = img;
  image.className = 'avatar_img'
  anchor.append(image);

}

