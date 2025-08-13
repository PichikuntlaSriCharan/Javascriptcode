// 1. Variables and data types
// name="Ironman";                  //camel case is fullName
// age=20;                          // = assignment operator
// console.log(name);
// console.log("age");
// x=null;
// y=undefined;
// price=100;
// console.log(x);
// console.log(y);
// console.log("price");
// isfollow=false                 //Variables have rules(no scace between,case sensitive,no reserved names,firts letter can be $,first is letter or $ or _)
// console.log(isfollow);
// //Dynamically typed language
// name=100
// console.log(name);
// //let(once created can be updated,not redeclared),const(once created can not be updated,not redeclared)(PI=3.21),var(old script)             //defining variables
// //Const should be initialized first (const a = 10)
// //datatypes 1.primitive(number,string,boolen,undefined,null) 2.non-primitive(objects,arrays)

// //2. Operators
// //Arthematic operators
// let a = 1;
// let b = 2;
// let c = 3;
// console.log("a = ",a);
// console.log("b = ",b);
// console.log("a + b = ", a+b);
// console.log("a - b",a-b);
// console.log("a * b",a*b);
// console.log("a / b",a/b);
// console.log("a % b",a%b);
// console.log("a ** b",a**b);
// //unary operators
// console.log("a++",a++);            //Prer and Post increment
// console.log("a = ",a);
// console.log("a--",a--);
// console.log("a = ",a);
// console.log("++a",++a);
// console.log("a = ",a);
// console.log("--a",--a);
// console.log("a = ",a);

// //Assignment opeartors                  // =,+=,-=,*=,%=,**=
// console.log("Assignment operators");
// a+=4
// console.log("a = ",a);

// //Comparison operators                // ==,===,!=,!==,>,<,>=,<=
// let d=5;
// let e="5";
// console.log("d==e : ",e==d);
// console.log("d===e : ",e===d);
// console.log("d!=e : ",e!=d);
// console.log("d!=e : ",e!==d);

// //Logical operators                  // Logical and &&
// //logical or                         // LogicaL or ||
// //Logical nnot                       // Logical not !

// g=1;
// f=2;
// let cond1 = g < f;
// let cond2 = g!==f;
// console.log("cond1 && cond2 = ", cond1 && cond2);
// console.log("cond1 || cond2 = ", cond1 || cond2);
// console.log("!cond2 = ", !cond2);


// let cond3 = g > f;
// let cond4 = g===f;
// console.log("cond3 && cond4 = ", cond3 && cond4);
// console.log("cond3 || cond4 = ", cond3 || cond4);
// console.log("!cond3 = ",!cond3 );


// let cond5 = g <= f;
// let cond6 = g===f;
// console.log("cond5 && cond6 = ", cond5 && cond6);
// console.log("cond5 || cond6 = ", cond5 || cond6);
// console.log("!cond6 = ", !cond6);

// //Conditional statements
// //1. if statement
// let agee=5;
// if(agee >= 18) {
//     console.log("Can vote");
// }

// if(agee < 18) {
//     console.log("Can not vote");
// }


// //2. If-else statement
// let mode="dark";
//  if(mode == "dark"){
//     color="black";
//  }
//  else {
//     color="White";
//  }
//  console.log(color)
//  // syntac --> rules

//  //3. else-if statement
// ag=100;
// if(ag<18){
//     console.log("Junior");
// }
// else if(ag==18){
//     console.log("middle");
// }
// else{
//     console.log("Senior");
// }
// //Ternary operator
// //condition?true:false
// let ageee=18;
// let result = ageee>=18?"adult":"not adult";
// console.log(result);

// //alert("Hello");
// //prompt("Promt");

// //3.Loops
// //1.for loop
// let z=5;
// let s=0;
// for(let i=1;i<=5;i++){
//     s+=i;
//     console.log(s);
// }

// //2.while loop
// let i = 1;
// while (i<=10){
//     console.log(i);
//     i++;
// }

// //3.do-while                  //1 time min executed
// let yy=20;
// do{
//     console.log(yy);
//     yy++;
// }while(yy<=10);

// //4. for-of loop for strings and arrays
// tony="SriCharan";
// let size=0;
// for (let i of tony){
//     console.log(i);
//     size++;
// }
// console.log(size);

// //5. For-in loops         //For objects and arrays
// const student = {
//     name:"Starc",
//     age:25,
//     id:"@mail.com",
// }
// for(let key in student){
//     console.log("Key : ",key,"   Value : ",student[key]);
// }
// //-------------------------------------------------------
// //Strings
// let str="Apna \nCollage";       ///n next line;/t tab space
// console.log(str);
// let strr="Sri/tcharan";
// console.log(strr.length);            //string property
// console.log(str[0]);
// let obj = {
//     itemm : "Pen",
//     pricee  : 10,
// };
// let out='the cost of  ${obj.itemm} is ${obj.pricee} rupees';    //string interpolation
// console.log(out);
// console.log(str.toUpperCase());          //string method
// console.log(str); 
// console.log(str.toLowerCase());
// iii="             a n i t h   a            "
// console.log(iii.trim());
// //String methods
// //str.slice(start,end);
// //str1.concat(str2);
// //str.replace(searchval,newval);,replaceAll
// //str.charAt(idx);

// //Arrays
// let scoree=[1,2,3,44,59];
// console.log(scoree);
// console.log(scoree.length);
// for(let i=0;i<=scoree.length;i++){
//     console.log(scoree[i]);
// }

// //string is immutabble 
// //Array is mutable

// //push(), pop() and toString() methods
// let fooditems=["Potato","apple","litchi","Tomato"];
// console.log(fooditems);
// fooditems.push("chips");      // adds last
// console.log(fooditems);
// fooditems.pop();25            // Dels last
// console.log(fooditems);
// console.log(fooditems.toString());
// console.log(fooditems);

// marksss = [85,97,44,37,77,76,60];
// // console.log(marksss.toString());

// //concat,Unshift,shift methods

// let concatedarray = fooditems.concat(scoree,marksss);
// console.log(concatedarray);

// concatedarray.unshift("Antman");
// console.log(concatedarray);             //adds at last

// dele=concatedarray.shift();            //return first item
// console.log(dele);
// //Methods start with small letters

// //slice and splice
// // slice(startidx,endidx);
// // splice(startidx,delcount,newelement);

// //Functions-----------------
// //Function definition            and              //Function calling/invoke
// // function functionName(param1,param2){           functionName();
// //     work
// // }
// //parameters are alive till block 
// function myFun(msg){
//     console.log(msg);
// }
// myFun("I love JS");

// //Sum of 2 numbers
// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2)
// sum(11,26)

// //Function can also return a value
// function summ(a,b){
//     s=a+b;
//     console.log("Start");
//     return s;
//     console.log("end");
// }

// let val=summ(30,20);
// console.log(val);

// //Arrow function for small lines
// // const fun_name=(param1,param32222)=>{
// //     Work
// // }

// const arrowsum = (a,b) =>{
//     console.log(a+b);
// };

// arrowsum(3,4);

//For each method
// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val);
// })

//arrow function for forEach           //Arrow function is not for strings
// let arr=["MAN","Delhi","hello"];
// arr.forEach((val)=> {
//     console.log(val.toUpperCase());
// })

//Arrrow function can take 3 parameters
// let arr=["man","d elhi","hello"];
// arr.forEach((val,idx,arr)=> {
//     console.log(val.toUpperCase(),idx,arr);
// })


//Higher order functions are functions they either return their a function or take funtion as a parameters
// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val**2);
// })
// let arr=[1,2,3,4,5];
// let calsqu = (arr) =>{
//     console.log(arr**2)
// };
// arr.forEach(calsqu);
//Some other Array methods 
//Map method    arr.map(fun())    it generates new array unlike forEach method
// let arr=[1,2,3,4,5];       using map for printing values in array
// arr.map((val)=>{
//     console.log(val);
// })

//using map tp print new array
// let arr=[1,2,3,4,5];
// let newarr = arr.map((val)=>{
//     return val**2;
// })
// console.log(newarr);

//filter method
// let arr=[1,2,3,4,5];            //it generates new array unlike forEach method
// let evenarr = arr.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenarr);

//reduce method         summation of array elements
// let arr=[1,2,3,4,5];
// const sumarr=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(sumarr);

// let arr=[1,2,3,4,5];                //max of array elements
// const maxval=arr.reduce((res,curr)=>{
//     return res>curr?res:curr;
// });
// console.log(maxval);

//DOM-----------------------------------------------------------------
// let heading=document.getElementById("id1");     //if no id shows null 
// console.log(heading);
//----------------------------------------------------------------------
// let head=document.getElementsByClassName("head-class");    //same like array
// //if no class returns empty array html array
// console.log(head);
//----------------------------------------------------------------------
// let para=document.getElementsByTagName("p");
// console.log(para);
//----------------------------------------------------------------------
//Queryselector auto detucts id,class,tag
// let a=document.querySelector("head");
// console.log(a);
// //----------------------------------------------------------------------
// let allele=document.querySelectorAll("head");   //gives nodelist
// console.log(allele);
//----------------------------------------------------------------------
// let a=document.querySelector(".head-class");
// console.log(a);
// let allele=document.querySelectorAll(".head-class");   //gives nodelist
// console.log(allele);
//id has no sense to all quaryselectors
// let id=document.querySelector("#id2");
// console.log(id);

// //DOM properties   get,change,update


//1.Tag name--returns tag name
// let para=document.querySelector("p");
// console.log(para.tagName);

// console.dir(document.body.firstChild);  //text node
// console.dir(document.body.lastChild);   //text node
// console.dir(document.body.childNodes);  //returns all child nodes
// console.dir(document.body.children);     //returns only element nodes


//2.innerHTML--returns inner html
//3/innerText--returns inner text
// let para=document.querySelector("p");
// console.log(para.innerHTML);
// para.innerHTML="New content";  //updates inner html
// console.log(para.innerHTML);
// console.log(para.innerText);

//let div=document.querySelector("div");
// console.log(div);
// console.log(div.innerHTML);
// console.log(div.innerText);


//input and output-----
// div.innerText="abcd"
// 'abcd'
// div.innerText
// 'abcd'
// div.innerHTMLM
// undefined
// div.innerHTML
// 'abcd'
// div.innerHTML="<i>newmessage</i>"
// '<i>newmessage</i>'
// div.innerHTML
// '<i>newmessage</i>'
// div.innerText
// 'newmessage'

//4.textContent--returns text content
// let a=document.querySelector("h2");
// console.dir(a);
// console.log(a.innerText);
// console.log(a.textContent);  //returns text content

//get attributes and set attributes
// let div=document.querySelector("div");
// console.log(div.setAttribute("class","newclass"));  //returns class name
// console.log(div.getAttribute("class"));  //returns class name
// let div=document.querySelector("div");
// console.log(div);
// div.style.backgroundColor="purple";  //changes background color
// console.log(div.style);
// div.style.fontSize="20px";  //changes font size
// div.innerText="World";  //changes inner text
// // div.style.visibility="hidden";  //hides the element

//insert element
//1.node.append
//2.node.prepend
//3.node.before
//4.node.after


// let newbtn=document.createElement("button");
// console.log(newbtn);
// newbtn.innerText="Click Me";

// let div=document.querySelector("div");
// div.append(newbtn)
// div.prepend(newbtn)
// // div.before(newbtn)  //inserts before the div
// div.after(newbtn)  //inserts after the div

// let newmessage=document.createElement("h2");
// newmessage.innerText="hello";
// // document.body.append(newmessage);  //appends to body
// document.querySelector("body").prepend(newmessage);  //prepends to body

// newmessage.remove();  //removes the element

//classList property
// para.classList
// DOMTokenList ['para', value: 'para']
// para.classList.add("newclass");
// para.classList
// DOMTokenList(2) ['para', 'newclass', value: 'para newclass']

//Event---------------------------
let btn1=document.querySelector(".btn");
// let a=0;
// btn1.onclick=()=>{
//     console.log("Handler1");
//     a++
//     console.log(a);
// }


// let div1=document.querySelector("#div1");
// div1.onmouseover=()=>{
//     console.log("Mouse over event");
// }

//Event object
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);  //gives x and y coordinates of mouse click
// }

//Event listeners
// btn1.addEventListener("click", ()=>{
//     console.log("Event listener 1");
// });
// btn1.addEventListener("click", ()=>{
//     console.log("Event listener 2");
// });
// const handler3=()=>{
//     console.log("Event listener 3");
// }
// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click", ()=>{
//     console.log("Event listener 4");
// });

// btn1.removeEventListener("click",handler3);  //removes the event listener

//Event object
// btn1.addEventListener("click", (evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);  //gives x and y coordinates of mouse click
// });
//Changing mode project
// let button=document.querySelector("button");
// // button.onclick=()=>{
// //     if(button.innerText === "Light Mode") {
// //         button.innerText="Dark Mode";
// //     }
// //     else(button.innerText === "Dark Mode") {
// //         button.innerText="Light Mode";
// //     }
// // }
// let body=document.querySelector("body");
// let para=document.querySelector("p");
// button.addEventListener("click", ()=>{
//     console.log(button.innerText)
//     if(button.innerText === "Dark Mode"){
//         button.innerText="Light Mode";
//         body.classList.add("dark");
//         body.classList.remove("light");

//     }else{
//         button.innerText="Dark Mode";
//         body.classList.remove("dark");
//         body.classList.add("light");
//     }
// });