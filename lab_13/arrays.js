let different = [23, "Vitaliy", true, null];//task 1
console.log(different[0]);
console.log("There are " + different.length + " elements");
let fifth = prompt("Enter the value in fifth element:");
different[4] = fifth;
console.log(different[4]);
different.shift();
console.log(different);

let cities = ["Ternopil", "Lviv", "Warsaw"];//task 2
let str = "";
for(let i = 0; i < cities.length; i++) 
{
    if(i != cities.length - 1){str = str + cities[i] + "*";}
    else{str = str + cities[i];}
}
console.log(str);

let math = [2, 3, 4, 5];//task 3
let m = math[0];
for(let i = 0; i < math.length; i++) 
{
    if(i > 0){m *= math[i];}
}
console.log("For:" + m);
let m_2 = math[0];
let i = 0;
while(i < math.length) 
{
    if(i > 0){m_2 *= math[i];}
    i++;
}
console.log("While:" + m_2);


for(let j = 0; j < 16; j++)//task 4
{
    if(j % 2== 0){console.log(j + " is even");}
    else{console.log(j + " is odd");}
}

let k = [];//task 5
function randArray(k, j)
{
    k[j] = Math.floor((Math.random() * 500) + 1);
}
console.log("Massive:");
for(let j = 0; j < 16; j++)
{
    randArray(k,j);
    console.log(k[j]);
}

let a = prompt("Enter the simply number");//task 6
let b = prompt("Enter the degree's number");
function raiseToDegree(a,b)
{
    return Math.pow(a, b);
}
let c = raiseToDegree(a,b);
alert(c);

console.log("Min number:");//task 7
let man= [2.3, 5, 4.3, -44, 77];
function findMin(man)
{
    let min = man[0];
    for(let i = 0; i < man.length; i++)
    {
        if(min > man[i])
        {
            min = man[i];
        }
    }
    return min;
}
let mini = findMin(man);
console.log(mini);

console.log("Unique number iii:");//task 8
let iii = [1, 2, 3, 5, 3];
let jjj = [1, 2, 3, 5, 11];
function findUnique(iii)
{
    for(let i =0 ; i < iii.length - 1; i++)
    {
        for(let j = i + 1; j < iii.length; j++)
        {
            if(iii[i] == iii[j])
            {
                return false;
            }
        }
    }
    return true;
}
let flag = findUnique(iii);
let flag_2 = findUnique(jjj);
console.log(flag);
console.log("Unique number jjj:");
console.log(flag_2);

console.log("Last elements of num is:");//task 9
let num = [3, 4, 10, -5];
let p = 0;
function lastElem(num, p)
{
    for(let i = 0; i < num.length; i++)
    {
        if(i >= (num.length - 1) - p)
        {
            console.log(num[i]);
        }
    }
}
lastElem(num, 2);

console.log("String:");//task 10
let string = "i love math and computer games";
function BigRegister(string)
{
    let s = string.split(" ");
    let is = "";
    for(let i = 0; i < s.length; i++)
    {
        s[i] = s[i][0].toUpperCase() + s[i].substr(1);
        is = is + s[i] + " ";
    }
    return is;
}
let ss = BigRegister(string);
console.log(ss);