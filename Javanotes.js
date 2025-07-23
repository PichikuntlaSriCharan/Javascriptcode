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
let z=5;
let s=0;
for(let i=1;i<=5;i++){
    s+=i;
    console.log(s);
}