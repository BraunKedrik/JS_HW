/*

Конструкция switch имеет один или более блок case и необязательный блок default

let a = 2 + 2;

switch(a){
    case 3:
        alert('Маловато');
        break;

    case 4:
        alert('В точку!');
        break;
    
    case 5:
        alert('Перебор!');
        break;

    default:
        alert('Нет таких значений!');        
}*/

/*

Любое выражение может быть аргументом для switch/case
И switch и case допускают любое выражение в качестве аргумента.

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
    break;

  default:
    alert("Это не выполнится");
}*/

/*

Несколько вариантов case, использующих один код, можно группировать.

Для примера, выполним один и тот же код для case 3 и case 5, сгруппировав их:

let a = 2 + 2;

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}*/

/*

Нужно отметить, что проверка на равенство всегда строгая. Значения должны быть одного типа, чтобы выполнялось равенство.

Для примера, давайте рассмотрим следующий код:

let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );s
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}*/


/*ЗАДАЧИ*/

/*Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}*/ 

/*let browser = prompt("Введите браузре:");

if (browser == 'Edge'){
    alert( "You've got the Edge!" );
}

else if(browser == 'Chrome'
    ||browser =='Firefox'
    ||browser =='Safari'
    ||browser =='Opera'){
    alert( 'Okay we support these browsers too' );
}

else{
    alert( 'We hope that this page looks ok!' );
}*/

/*Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}*/

let number = +prompt('Введите число между 0 и 3', '');

switch(number){
    case 0:
        alert('Вы ввели число 0');
        break;
    
    case 1:
        alert('Вы ввели число 1');
        break;

    case 2:
    case 3:    
        alert('Вы ввели число 2, а может быть и 3');
        break;
    
    default:
        alert( 'Число не в нужном диапазоне' );
}

