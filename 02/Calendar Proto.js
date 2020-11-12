window.onload = function() {
  const calendar = document.getElementById('calendar');
  const monthName = document.getElementById('monthName');
  const years = document.getElementById('years');

  const bodyCalendar = document.getElementById('bodyCalendar');
  const but1 = document.getElementById('but1');
  const but2 = document.getElementById('but2');

  const myMonthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  years.addEventListener('click', handleClick); /*При клике на всему NAV выводить функцию*/
  function handleClick(e) {
    if (e.target.tagName !== 'A') {
      return;   /*Если я кликаю на Элемент НЕ содержащий А, то ничего не делать*/
    }
    e.preventDefault(); /*В ином случае 1.Останавливаем стандартное поведение браузера*/
    window.location.hash = e.target.name; /*2. Присваеваем ХЭШУ ИМЯ ССЫЛКИ*/
  }

  window.addEventListener('hashchange', onHashChange);/*Юзаю вывод ХЭША*/
  function onHashChange() {
    const hash = window.location.hash.slice(1);
    const newCalend = new Year(hash, 1); /* Задаем функцию-конструктор С АРГУМЕНТАМИ*/
    newCalend.createCalendar(newCalend); /*  Добавляем метод*/
    if (hash === '') {
      window.location.reload(); /* Запись для кнопки вернуться на главную */
    }  
  }
  
  function Year(year, month) {
    this.name = 'calendar';
    this.year = year;
    this.month = month;
    Year.createInitSlider(this); /* Описываем функцию-конструктор С ПАРАМЕТРАМИ */
  }

  Year.prototype.createCalendar = function () {   /* /* Добавляем метод в прототип класса, который рисует нам сам календарь и блок слева*/ 
    let { name, year, month } = this; /* Присваиваем this таким образом */
    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }
    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';
      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }
      d.setDate(d.getDate() + 1);
    }
    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }
    // закрыть таблицу
    table += '</tr></table>';

    if (this.month <= 12 && this.month >= 0) { /* Добавляем блок с месяцем(у меня он слева) и стили */
      calendar.innerHTML = `${table}`;
      monthName.innerHTML = `<p>${myMonthes[this.month - 1]}</p>`;
      monthName.style.display = 'block';
      monthName.style.paddingLeft = '25px';
      monthName.style.width = '50%';
      monthName.style.background = 'white';
      monthName.style.borderRadius = '5px';
      monthName.style.marginRight = '5px';
      monthName.style.marginTop = '10px';
      monthName.style.marginBottom = '10px';
      monthName.style.marginLeft = '10px';
      bodyCalendar.style.marginRight = '10px';
    } else {
      calendar.innerHTML = `Увы, Это не тот год`
    };

    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
      let day = date.getDay();
      if (day == 0) day = 7; // сделать воскресенье (0) последним днем
      return day - 1;    /*Функция отрисовки ячеек календаря + запись в прототип*/
    }
  };  

  Year.createInitSlider = function (obj) {  /* Добавляем метод в Класс */
/* ВАЖНО для понимания!
В нашем случае obj это по сути this из Класса Year. Т.е. это все - и год, и месяц, и поле календарь
На строке 24. через создание newCalend мы ЗАРАНЕЕ передаем аргументы нашему классу(hash , 1), 
хотя описываем функцию-конструктор чуть ниже(31 строка). Не путайтесь.
В дальнейшем брать инфу что такое year, month он будет из строки 24,
что в свою очередь является this в строке 35, что в свою очредь является obj ниже.)*/
    function incrementCount(obj) {  /* Прописываем функции инкрементов и декрементов */
      if (obj.month < 12) {
        obj.month++;
        obj.createCalendar();
        console.log(`это мой месяц ${obj.month} ${obj.year} года`)
      }
      else {
        obj.createCalendar();
        monthName.innerHTML = `<p>${myMonthes[0]}<p>`;
        obj.month = 1;
        console.log(`это мой месяц ${obj.month} ${obj.year} года`)
      }
    };

    function decrementCount(obj) {
      if (obj.month > 1) {
        obj.month--;         /*Проскакивает через 0 массива */
        obj.createCalendar();
        console.log(`это мой месяц ${obj.month} ${obj.year} года`)
      } else {
        obj.createCalendar();
        monthName.innerHTML = `<p>${myMonthes[11]}</p>`;
        obj.month = 12;
        console.log(`это мой месяц ${obj.month} ${obj.year} года`)
      }
    };

    const incrCount = document.createElement('button');
    incrCount.id = 'incrementCount';
    incrCount.addEventListener('click', function () {
      incrementCount(obj); /* По клику вызываем функцию */
    });
    but2.innerHTML = ''
    incrCount.innerHTML = '>'
    but2.appendChild(incrCount)

    const decrCount = document.createElement('button');
    decrCount.id = 'decrementCount';
    decrCount.addEventListener('click', function () {
      decrementCount(obj);
    });
    but1.innerHTML = ''
    decrCount.innerHTML = '<'
    but1.appendChild(decrCount)
  };
}