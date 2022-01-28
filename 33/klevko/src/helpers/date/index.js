import "./script.css";

export function createDate() {
  const div = document.createElement("div");
  div.classList.add("date");
  //---------------------------

  const date = document.createElement("p");
  date.textContent = "12/12/2021";

  //--------------------------

  const signature = document.createElement("p");
  signature.textContent = "Подпись:___________";

  div.append(date, signature);
  return div;
}
