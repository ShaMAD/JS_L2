let inputNum = +prompt("Введите число");
alert(`В числе ${inputNum} количество сотен: ${Math.trunc(inputNum/100)%10}, десятков: ${Math.trunc(inputNum/10)%10}, единиц: ${inputNum % 10}`);