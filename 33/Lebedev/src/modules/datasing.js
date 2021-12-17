class DataSing {
   createDataSing() {
      const data = document.createElement("p");
      const sing = document.createElement("p");
      data.innerHTML = "Дата_____________";
      sing.innerHTML = "Подпись____________";
      data.className = "data";
      sing.className = "sing";
      document.body.append(data);
      document.body.append(sing);
   }
}

export const datasing = new DataSing();