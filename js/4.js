let inputNum = +prompt("Введите число");

GetAlert(inputNum);

function GetAlert(num) {
    alert(`В числе ${num} количество сотен: ${Math.trunc(num/100)%10}, десятков: ${Math.trunc(num/10)%10}, единиц: ${num % 10}`); 
}
