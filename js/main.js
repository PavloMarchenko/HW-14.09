//  1.Створити масив у якому буде 3 юзера описані як обєкти з такими полями - age, name, hobby (теж повинно бути масивом ).

// let users = [
//   user1 = {
//     age: 30,
//     name: 'Ivan',
//     hobby: ['fishing', 'football']
//   },
//   user2 = {
//     age: 32,
//     name: 'Vasyl',
//     hobby: ['swiming', 'fishing']
//   },
//   user3 = {
//     age: 33,
//     name: 'Dmytro',
//     hobby: ['fishing', 'voleyball']
//   }
// ];



//2.Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent). Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined


// let currentExchange = {
//    "UAH": 1,
//    "USD": 27.91,
//    "EUR" : 32.95,
//    "BRL" : 1088.49
//    };

// let howMoney = 0;
// while (isNaN(howMoney) || howMoney === 0) {
//    howMoney = +prompt('How much UAH do you have?');
// }

// let currencysys = '';
// while (currencysys !== 'EUR' && currencysys !== 'USD' && currencysys !== 'BRL') {
//    currencysys = prompt('What currency do you want to convert it to? EUR, USD, or  BRL?');

// }
// let calculate = howMoney / currentExchange[currencysys];

// console.log(calculate);





// 3.Спитатись у юзера суму замовлення і вивести результат зурахуванням знижки : до 500 гривень знижка -1 %, від 500до 1000  - 5%,  більше 1000 - 10% та подарунковийсертифікат на 200 гривень у подарунок!

// let sumOrder = +prompt('Яка запланована сумма замовлення?');
//   if (sumOrder < 500) {
//     alert('Ваша знижка 1%');
//   } else if (sumOrder >= 500 && sumOrder <= 1000) {
//     alert('Ваша знижка 5%');
//   } else {
//     alert('Ваша знижка 10% + Подарунковий сертифікат на 200грн');
//   }



// 4.Створити тест на знання будь-чого, юзер має відповісти на5 питань, вірна відповідь - 1 бал, якщо юзер відповістьправильно на всі 5 запитань - додатково додати 1бонусний бал.

// let count = 0;

// let question1 = confirm('День Незалежності 24 серпня?');
//   question2 = confirm('День народження раз на рік?');
//   question3 = confirm('Пес має чотири лапи?');
//   question4 = confirm('Взимку холодно?');
//   question5 = confirm('Все буде добре?');

// if (question1 == true) {
//   count += 1;
// } 
// if (question2 == true) {
//   count += 1;
// }
// if (question3 == true) {
//   count += 1;
// }
// if (question4 == true) {
//   count += 1;
// }
// if (question5 == true) {
//   count += 1;
// }
// if (count == 5) {
//   count += 1;
// }

// alert(count);



// 5.Запитатись у користувача 3 значне число та сказати чи є уньому однакові цифри

// let number = '';
// while (number.length !== 3 || isNaN(number)) {
//    number = prompt('Введіть 3 значне число');
// }

// let splitNumber = number.split('');

// let fistSymbol = splitNumber[0];
// let secondSymbol = splitNumber[1];
// let thirdSymbol = splitNumber[2];

// if (fistSymbol === secondSymbol || fistSymbol ===  thirdSymbol || secondSymbol === thirdSymbol) {
//    alert('Маємо збіг');
// } else {
//    alert('Немає збігів');
// }


  // 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.

// let chooseButton = +prompt('Натисніть клавішу від 1 до =');

// switch (chooseButton) {
//   case '1':
//     alert( 'Ви отримаєте "!"' );
//     break;
//   case 2:
//      alert( 'Ви отримаєте """' );
//     break;
//   case 3:
//       alert( 'Ви отримаєте №' );
//      break;
//   case 4:
//       alert( 'Ви отримаєте ;' );
//      break;
//   case 5:
//       alert( 'Ви отримаєте %' );
//      break;
//   case 6:
//       alert( 'Ви отримаєте :' );
//      break;
//   case 7:
//       alert( 'Ви отримаєте ?' );
//      break;
//   case 8:
//       alert( 'Ви отримаєте *' );
//      break;
//   case 9:
//       alert( 'Ви отримаєте (' );
//      break;
//   case '0':
//       alert( 'Ви отримаєте )' );
//      break;
//   case '-':
//       alert( 'Ви отримаєте _' );
//      break;
//   case '=':
//      alert( 'Ви отримаєте =' );
//     break;

// }