console.log('hello')
// alaert('hello and welcome');
var a=9;
var a=10;

console.log(a); // block1

{
    var a=20;
    console.log(a);
    //block2
}
let b=23;
console.log(b);
{
    let b=34;
    console.log(b);
}
console.log(b);
//const
const t=30;
console.log(t);
{
    const t=90;
    console.log(t)
}
console.log(t);
//data type
var nam='samanway';
console.log(typeof(nam) );
//numbers
var count=10;
console.log(typeof(count) );
//boolean
var bb=true;
console.log(typeof(bb) );
var gttype;
console.log(typeof(gttype) );
//arrays
let arr=['red','blue','white',10]
console.log(arr[3]);
console.log(arr.lenght);
arr.push('violet');
console.log(arr);
arr.pop()
console.log(arr);
//javascript object
let car={
    mileage:100,
    model:'110',
    color:'black'
}
console.log(car)
console.log(car.color);
console.log(car.mileage);
let person=new Object();
person.gender='male';
person.height=180;
console.log(person);

var A=7, c=5;
console.log(A+c);


var a=10
var d=++A;
console.log(a);
console.log(d);
//if else
if (a==b && a==10) {
    console.log('a is equal to b')
} else {
    console.log('a is not equal to b and a is not 10')
}

if (c===d){
    console.log(' c equal to d')
} else {
    console.log('c not equal to d')
}
 

if (c==d){
    console.log('c equal to d')
} else{
    console.log('c not equal to d')
}


C=40;
D=22;
if (C==D || C==20){
    console.log('c is greater than d')
} else {
    console.log('c is smaller than d')
}

var add=6;
add  += 3;
console.log(add);  

var add=6;
add  -= 3;
console.log(add);

var a=18;
var c=22;
var d=40;
console.log(add);
var exp=a+b*(c-d)-7;
console.log(exp)


//functions
function display(name){
    console.log('hi '+name+'  welcome to js');
}
display('mridula');//function call

function addition(t,s){
    var result=t+s;
    console.log(result);
}
addition(18,22);

var result=addition(18,22);
console.log('the sum is '+result);


function subtraction(t,s){
    var result=t-s;
    return result;
}
subtraction(18,22); 

var result=subtraction(18,22);
console.log('the sum is '+result);



















