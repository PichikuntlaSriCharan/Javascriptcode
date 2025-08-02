// 1. Variables and data types
name="Ironman";                  //camel case is fullName
age=20;                          // = assignment operator
console.log(name);
console.log("age");
x=null;
y=undefined;
price=100;
console.log(x);
console.log(y);
console.log("price");
isfollow=false                 //Variables have rules(no scace between,case sensitive,no reserved names,firts letter can be $,first is letter or $ or _)
console.log(isfollow);
//Dynamically typed language
name=100
console.log(name);
//let(once created can be updated,not redeclared),const(once created can not be updated,not redeclared)(PI=3.21),var(old script)             //defining variables
//Const should be initialized first (const a = 10)
//datatypes 1.primitive(number,string,boolen,undefined,null) 2.non-primitive(objects,arrays)

//2. Operators
//Arthematic operators
let a = 1;
let b = 2;
let c = 3;
console.log("a = ",a);
console.log("b = ",b);
console.log("a + b = ", a+b);
console.log("a - b",a-b);
console.log("a * b",a*b);
console.log("a / b",a/b);
console.log("a % b",a%b);
console.log("a ** b",a**b);
//unary operators
console.log("a++",a++);            //Prer and Post increment
console.log("a = ",a);
console.log("a--",a--);
console.log("a = ",a);
console.log("++a",++a);
console.log("a = ",a);
console.log("--a",--a);
console.log("a = ",a);

//Assignment opeartors                  // =,+=,-=,*=,%=,**=
console.log("Assignment operators");
a+=4
console.log("a = ",a);

//Comparison operators                // ==,===,!=,!==,>,<,>=,<=
let d=5;
let e="5";
console.log("d==e : ",e==d);
console.log("d===e : ",e===d);
console.log("d!=e : ",e!=d);
console.log("d!=e : ",e!==d);

//Logical operators                  // Logical and &&
//logical or                         // LogicaL or ||
//Logical nnot                       // Logical not !

g=1;
f=2;
let cond1 = g < f;
let cond2 = g!==f;
console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 || cond2 = ", cond1 || cond2);
console.log("!cond2 = ", !cond2);


let cond3 = g > f;
let cond4 = g===f;
console.log("cond3 && cond4 = ", cond3 && cond4);
console.log("cond3 || cond4 = ", cond3 || cond4);
console.log("!cond3 = ",!cond3 );


let cond5 = g <= f;
let cond6 = g===f;
console.log("cond5 && cond6 = ", cond5 && cond6);
console.log("cond5 || cond6 = ", cond5 || cond6);
console.log("!cond6 = ", !cond6);

//Conditional statements
//1. if statement
let agee=5;
if(agee >= 18) {
    console.log("Can vote");
}

if(agee < 18) {
    console.log("Can not vote");
}


//2. If-else statement
let mode="dark";
 if(mode == "dark"){
    color="black";
 }
 else {
    color="White";
 }
 console.log(color)
 // syntac --> rules

 //3. else-if statement
ag=100;
if(ag<18){
    console.log("Junior");
}
else if(ag==18){
    console.log("middle");
}
else{
    console.log("Senior");
}
//Ternary operator
//condition?true:false
let ageee=18;
let result = ageee>=18?"adult":"not adult";
console.log(result);

//alert("Hello");
//prompt("Promt");

//3.Loops
//1.for loop
let z=5;
let s=0;
for(let i=1;i<=5;i++){
    s+=i;
    console.log(s);
}

//2.while loop
let i = 1;
while (i<=10){
    console.log(i);
    i++;
}

//3.do-while                  //1 time min executed
let yy=20;
do{
    console.log(yy);
    yy++;
}while(yy<=10);

//4. for-of loop for strings and arrays
tony="SriCharan";
let size=0;
for (let i of tony){
    console.log(i);
    size++;
}
console.log(size);

//5. For-in loops         //For objects and arrays
const student = {
    name:"Starc",
    age:25,
    id:"@mail.com",
}
for(let key in student){
    console.log("Key : ",key,"   Value : ",student[key]);
}
//-------------------------------------------------------
//Strings
let str="Apna \nCollage";       ///n next line;/t tab space
console.log(str);
let strr="Sri/tcharan";
console.log(strr.length);            //string property
console.log(str[0]);
let obj = {
    itemm : "Pen",
    pricee  : 10,
};
let out='the cost of  ${obj.itemm} is ${obj.pricee} rupees';    //string interpolation
console.log(out);
console.log(str.toUpperCase());          //string method
console.log(str); 
console.log(str.toLowerCase());
iii="             a n i t h   a            "
console.log(iii.trim());
//String methods
//str.slice(start,end);
//str1.concat(str2);
//str.replace(searchval,newval);,replaceAll
//str.charAt(idx);

//Arrays
let scoree=[1,2,3,44,59];
console.log(scoree);
console.log(scoree.length);
for(let i=0;i<=scoree.length;i++){
    console.log(scoree[i]);
}

//string is immutabble 
//Array is mutable

//push(), pop() and toString() methods
let fooditems=["Potato","apple","litchi","Tomato"];
console.log(fooditems);
fooditems.push("chips");      // adds last
console.log(fooditems);
fooditems.pop();25            // Dels last
console.log(fooditems);
console.log(fooditems.toString());
console.log(fooditems);

marksss = [85,97,44,37,77,76,60];
// console.log(marksss.toString());

//concat,Unshift,shift methods

let concatedarray = fooditems.concat(scoree,marksss);
console.log(concatedarray);

concatedarray.unshift("Antman");
console.log(concatedarray);             //adds at last

dele=concatedarray.shift();            //return first item
console.log(dele);
//Methods start with small letters

//slice and splice
// slice(startidx,endidx);
// splice(startidx,delcount,newelement);

//Functions
//Function definition            and              //Function calling/invoke
// function functionName(param1,param2){           functionName();
//     work
// }
//parameters are alive till block 
function myFun(msg){
    console.log(msg);
}
myFun("I love JS");

//Sum of 2 numbers
function sum(a,b){
    console.log(a+b);
}
sum(1,2)
sum(11,26)

//Function can also return a value
function summ(a,b){
    s=a+b;
    console.log("Start");
    return s;
    console.log("end");
}

let val=summ(30,20);
console.log(val);

//Arrow function for small lines
// const fun_name=(param1,param32222)=>{
//     Work
// }

const arrowsum = (a,b) =>{
    console.log(a+b);
};

arrowsum(3,4);