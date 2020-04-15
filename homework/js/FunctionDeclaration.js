"use strict"
/* Function Declaration (Объявление Функции): */

/*function showMessage(){
    alert('Hello');
}*/

/* Вызов функции */
//showMessage();

/* Локальные переменные */

/*function showMessage(){
    let message = "Привет, я JavaScript"; //локальная перменная
    alert(message);
}*/

//showMessage(); // Привет, я JavaScript

//alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

/* Внешние переменные */

//let userName = 'Вася';

/*function showMessage() {
  let message = 'Привет, ' + userName;
  alert(message);
}*/

//showMessage(); // Привет, Вася

/* Функция обладает полным доступом к внешним переменным и может изменять их значение. */

/*let userName = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  alert(message);
}*/

//alert( userName ); // Вася перед вызовом функции

//showMessage();

//alert( userName ); // Петя, значение внешней переменной было изменено функцией

/*let userName = 'Вася';

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = 'Привет, ' + userName; // Петя
  alert(message);
}*/

// функция создаст и будет использовать свою собственную локальную переменную userName
//showMessage();

//alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную

/*Переменные, объявленные снаружи всех функций, такие как внешняя переменная userName в вышеприведённом коде – называются глобальными.

Глобальные переменные видимы для любой функции (если только их не перекрывают одноимённые локальные переменные).

Желательно сводить использование глобальных переменных к минимуму. В современном коде обычно мало или совсем нет глобальных переменных. 

Хотя они иногда полезны для хранения важнейших «общепроектовых» данных.*/

/* Параметры */

/*function showMessage(from, text) { // аргументы: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
  showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)*/

  /*function showMessage(from, text) {

    from = '*' + from + '*'; // немного украсим "from"
  
    alert( from + ': ' + text );
  }
  
  let from = "Аня";
  
  showMessage(from, "Привет"); // *Аня*: Привет*/
  
  // значение "from" осталось прежним, функция изменила значение локальной переменной

 /* Если мы хотим задать параметру text значение по умолчанию, 
 мы должны указать его после =:*/

/*function showMessage(from, text = "текст не добавлен") {
    alert( from + ": " + text );
}*/

//showMessage("Аня"); // Аня: текст не добавлен

/*function showMessage(from, text = anotherFunction()) {
    // anotherFunction() выполнится только если не передан text
    // результатом будет значение text
}*/

/*В JavaScript параметры по умолчанию вычисляются каждый раз, 
когда функция вызывается без соответствующего параметра.

В примере выше anotherFunction() будет вызываться каждый раз, 
когда showMessage() вызывается без параметра text.*/

/*Возврат значений*/

/*function sum(a, b) {
    return a + b;
}
  
let result = sum(1, 2);
  alert( result ); // 3*/

/*function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
}
  
let age = prompt('Сколько вам лет?');
  
if ( checkAge(age) ) {
    alert( 'Доступ получен' );
} 

else {
    alert( 'Доступ закрыт' );
}*/

//Если функция не возвращает значения, это всё равно, как если бы она возвращала undefined:

/*function doNothing() { пусто  }*/

//alert( doNothing() === undefined ); // true
//Пустой return аналогичен return undefined:

/*function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true*/

/*Функции должны быть короткими и делать только что-то одно. 
Если это что-то большое, имеет смысл разбить функцию на несколько меньших. Иногда следовать этому правилу непросто, но это определённо хорошее правило.*/

//Например, сравним ниже две функции showPrimes(n). Каждая из них выводит простое число до n.

//Первый вариант использует метку nextPrime:

/*function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }
}*/

//Второй вариант использует дополнительную функцию isPrime(n) для проверки на простое:

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // простое
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }

/* ЗАДАЧИ */

//Используя оператор ?:

/*function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}*/

//Используя оператор || (самый короткий вариант):

/*function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}*/

//Обратите внимание, что круглые скобки вокруг age > 18 не обязательны. Они здесь для лучшей читаемости кода.


// function minNumd(a, b){
//     if (a>b){
//         return b;
//     }
//     else{
//         return a;
//     }
// }

// alert(minNumd(3,-1));

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');
  
if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} 

else {
    alert( pow(x, n) );
  }