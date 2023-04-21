let x = 1;
let y = 2;
let res1 = "12";// Допишіть код (використовувати змінні x і y)
console.log(res1); // "12"
console.log(typeof res1); // "string"
let res2 = "true2";// Допишіть код (використовувати змінні x і y)
console.log(res2); // "true2"
console.log(typeof res2); // "string"
let res3 = true;// Допишіть код (використовувати змінні x і y)
console.log(res3); // true
console.log(typeof res3); // "boolean"
let res4 = 12 * "oo";// Допишіть код (використовувати змінні x і y)
console.log(res4); // NaN
console.log(typeof res4); // "number"
let num = prompt("What is a number?", "7");
if(num >= 0 && num % 7 == 0)
{
    alert(num);
}
let isAdmin = prompt("What is a number?", "18");
if(isAdmin >= 18)
{
    alert("You're adult");
}
else
{
    alert("You're young");
}
let one = prompt("Enter the first line of triangle", "1");
let two = prompt("Enter the second line of triangle", "1");
let three = prompt("Enter the third line of triangle", "1");
let square = one * two * three;
alert(square);
let hour = prompt("Enter the hour of a day", "1");
if (hour == 23){alert("Good night");}
else if (hour < 5 && hour >= 0){alert("Good night");}
else if(hour >=5 && hour < 11){alert("Good morning");}
else if(hour >=11 && hour < 17){alert("Good day");}
else if(hour >=17 && hour < 23){alert("Good evening");}
else {alert("Wrong!");}