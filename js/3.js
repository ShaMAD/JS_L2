let inputDay = +prompt("Введите число от 1 до 31");
(inputDay > 0 && inputDay < 11) ? alert("Число в 1 декаде.") : 
(inputDay > 10 && inputDay < 21) ? alert("Число в 2 декаде.") :
(inputDay > 20 && inputDay < 32) ? alert("Число в 3 декаде.") :  alert("Число не может быть меньше 1 и больше 31.") ;