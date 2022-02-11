import "./style.css";

export function createAbout() {
  const div = document.createElement("div");
  div.classList.add("about");

  //---------------------------------------

  const aboutOne = document.createElement("div");
  aboutOne.classList.add("aboutOne");

  const name = document.createElement("p");
  name.textContent = "ГАЛИНА МЕЛЬНИКОВА";

  const profession = document.createElement("p");
  profession.textContent = "МЕНЕДЖЕР ПО ПРОДАЖАМ";
  aboutOne.append(name, profession);

  //----------------------------------------

  const aboutTwo = document.createElement("div");
  aboutTwo.classList.add("aboutTwo");

  const personalData = document.createElement("p");
  personalData.textContent = "ЛИЧНЫЕ ДАННЫЕ";

  const personalDataText = document.createElement("p");
  personalDataText.textContent =
    "Профессиональный агент по продажам с опытомоказания первоклассной поддержки клиентам ипостроении доверительных отношений сзаказчиками на протяжении более 6 лет.";
  personalData.append(personalDataText);

  const skills = document.createElement("p");
  skills.textContent = "НАВЫКИ И УМЕНИЯ";

  const skillsText = document.createElement("p");
  skillsText.textContent =
    "Мотивирована, хорошо дисциплинирована. Получаю удовольствие от помощи другим людям. Свободное владение английским, испанским ифранцузским. Член команды.";
  skills.append(skillsText);

  const contacts = document.createElement("p");
  contacts.textContent = "КОНТАКТНАЯ ИНФОРМАЦИЯ";

  const contactsText = document.createElement("p");
  contactsText.textContent =
    "Дом. тел.: +7 (123) 123-45-67, Моб.тел.: +7 (123) 123-45-67, privet@super-website.ru, www.super-website.ru, Россия, г. Барнаул, ул. Первомайская, д. 123, 123345";
  contacts.append(contactsText);
  aboutTwo.append(personalData, skills, contacts);

  //------------------------------------------

  div.append(aboutOne, aboutTwo);
  return div;
}
