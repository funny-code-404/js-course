// task 1
let value = 'Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха бфла речка';
let replStr = value.replace(",", "."); //finvalue = value.replace(/,/g, '.');
console.log(replStr);

//task 2
let str = "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже";
let regexp = /([А-Я][а-я']*)(\s[А-Я][а-я']*)*/g;
let words = str.match(regexp);
let removedItem = words.splice(3, 1);
let names = words.join(",");
let result = `"На день рождения пришли: ${names}`;
console.log(result);

//task3 -copy of array
let fruits = ["Яблоко", "Апельсин", "Слива"];
let result = JSON.parse(JSON.stringify(fruits));
//
let fruits = ["Яблоко", "Апельсин", "Слива"];
let resultArray = fruits.slice();
//
let fruits = ["Яблоко", "Апельсин", "Слива"];
let result = Object.assign([], fruits);
//
let fruits = ["Яблоко", "Апельсин", "Слива"];
let vegetables = ["tomato", "onion", "carrot"];
let result = [...fruits, ...vegetables];

// преобразовать массив в строку
let fruits = ["Яблоко", "Апельсин", "Слива"];
let result = fruits.join();
//
let fruits = ["Яблоко", "Апельсин", "Слива"];
let result = fruits.toString();
//
let fruits = ["Яблоко", "Апельсин", "Слива"];
let result = fruits + '';

//получить сумму элементов массива
let numbers = [1, 2, 3];
let result = numbers.reduce((a, b) => a + b, 0);

// удалить повторки
let languages = ['NET', 'C++', 'C', 'Fortran', 'Java', 'Pyton', ' NET', 'C++', 'C', 'Fortran', 'Java', 'Pyton'];
let set = new Set(languages);
let result = ([...set]);

//посчитать кол-во элементов
let numbers = [1, , 2, 2, 3, 3, 3, 4, 4, 5, 5, 5];
let allNumbers = numbers.map(String);

let wordsCount = allNumbers.reduce((count, number) => {
    count[number] = count[number] ? count[number] + 1 : 1;
    return count;
}, {});

console.log(wordsCount);

// delete falsy values
let array = [NaN, 0, 77, false, -17, '', undefined, 99, null];
let result = array.filter(Boolean);
//
let array = [NaN, 0, 77, false, -17, '', undefined, 99, null];
let result = array.filter(el => !!el);

//написать функцию нахождения максимального/минимального числа в массuве
let numbers = [1, 2, 3, 4, 5, 5];

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//
function greet(name) {
    console.log("Hello, " + name);
}
greet(prompt("Enter Name:"));

// Выведите на экран элемент с ключом 'c' двумя способами
let testobj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(testobj['c']);
console.log(testobj.c);

//Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
let obj = {
    Петя: 1000,
    Коля: 5000,
    Вася: 2000
};
let salaries = Object.values(obj);
let names = Object.keys(obj);
console.log(`Зарплата Пети ` + salaries[0]);
console.log(`Зарплата Коли ` + salaries[1]);

/* Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
(понедельник - первый и т.д.). Выведите на экран текущий день недели. Пусть теперь номер дня недели
хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий
значению переменной day  */

var obj = { 1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс' };
let allDays = Object.values(obj);
let day = Object.keys(obj).filter(function(key) { return obj[key] })[1];
console.log(`Сегодня ` + allDays[1]);
console.log(day);

//
for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(fizzBuzz);
    } else if (i % 3 === 0) {
        console.log(fizz);
    } else if (i % 5 === 0) {
        console.log(buzz);
    } else {
        console.log(i);
    }
}

/////////////////    Palindrom
let str = 'abcdedcba',
    str2 = 'abcded';

function isPalindrome(str) {
    let strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return 'yes';
    } else {
        return 'no';
    }
}

test = isPalindrome('abcdedcba');
test2 = isPalindrome('abcded');

console.log(test);
console.log(test2);
console.log('isPalindrome result: ' + 'str - ' + test + ';' + 'str2 -' + test2);