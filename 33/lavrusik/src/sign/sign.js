export const createSign = () => {
   const sign = document.createElement('div');
   sign.className = 'sign';
   const date = document.createElement('span');
   date.className = 'date';
   const autograph = document.createElement('span');
   autograph.className ='autograph';
   date.textContent = 'Дата';
   autograph.textContent = 'Подпись';
   document.body.appendChild(sign);
   sign.appendChild(date);
   sign.appendChild(autograph);
}