// //1 project
// const Product={
//     item : "Ball pen",
//     Rating : "5 star",
//     Price : 270,
//     offer : "Deal of the day",
// }

// console.log(Product);
// console.log(typeof Product);


// const Profile = {
//     Name : "P.Sri Charan",
//     Followers : 50,
//     Following : 0,
//     isfolllow : true,
// }
// console.log(Profile);
// console.log(typeof Profile);
// console.log(typeof Profile["Name"]);
// console.log(typeof Profile["Following"]);
// console.log(typeof Profile["Followers"]);
// console.log(typeof Profile["isfolllow"]);
// /*Multiple lines*/
// //single line
// //2 project
// // let num=prompt("Enter a number : ");
// // if (num%5 ==0){
// //     console.log(num,"is multiple of 5");
// // }
// // else{
// //     console.log(num,"is NOT multiple of 5");
// // }

// //3 project
// // let score=prompt("Enter score : ");
// // if(score<=100 && score>80){
// //     console.log("A grade");
// // }
// // else if(score>70 && score<=70){
// //     console.log("B grade");
// // }
// // else if(score>60 && score<=69){
// //     console.log("C grade");
// // }
// // else if(score>50 && score<=59){
// //     console.log("D grade");
// // }
// // else{
// //     console.log("Fail");
// // }

// //4 project
// for(let ii=0;ii<=100;ii++){
//     console.log(ii);
// }
// console.log("Project 5")
// //5 Project
// for(let jj=0;jj<=100;jj++){
//     if(jj%2 ==0){
//         console.log(jj);
//     }
// }

// //6 Project
// let game_num=25;
// // do{
//     // var l=prompt("Enter any number to guess game number : ");

// // }while(l!=game_num);
// // console.log("Congratulations");

// //7 Project
// // name=prompt("Enter user-name : ");
// // let lenn=name.length1;
// // let id="@" + name + lenn;
// // console.log(id);

// //5 Project
// let marks = [85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(avg);


// //6 Project
// let iii=0;
// ar=[250,645,300,900,50];
// for(let val of ar){
//     let offer=val/10;
//     ar[iii]=ar[iii]-offer;
//     console.log(ar[iii]);
//     iii++;
// }


// companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflex"];
// del=companies.shift();
// console.log(companies);
// companies.splice(1,1,"Ola");
// console.log(companies);
// companies.splice(5,0,"Amazon");
// console.log(companies);

// //No of vowels in a string using functions
// function countvowell(st){
//     let count=0;
//     for(const char of st){
//         if(char==="a" || char==="e" || char==="i" || char==="o" ||char==="u")
//             count++;
//         }
//     console.log(count);
//     }
    
    
// //Square of number
// let nums=[1,2,3,4,5];
// nums.forEach((num)=>{
//     console.log(num*num);    
// })

//Practice 1
// function countval(str){
//     let count=0;
//     for(const char of str){
//         if(char ==='a' || char ==='e' || char ==='i' || char ==='o' || char ==='u'){
//            // console.log(char);
//             count++;
//         }
//     }
//     console.log(count);
// }


//Practice 2

// const vow=(str)=>{
//      let count=0;
//      for(const char of str){
//          if(char ==='a' || char ==='e' || char ==='i' || char ==='o' || char ==='u'){
//             // console.log(char);
//              count++;
//          }
//      }
//      console.log(count);
// }
//Practice 3
// let marks=[23,54,99,100,98,65];
// let toppers = marks.filter((val)=>{
//     return val>90;
// })
// console.log(toppers);

//Practice 4
// let n=prompt("Enter a number");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }

// const sumnarr=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(sumnarr);

// const mularr=arr.reduce((res,curr)=>{
//     return res*curr;
// })
// console.log(mularr);

//Project 1
// let a=document.querySelector("h2");
// console.dir(a);
// let inner=a.innerText;
// a.innerText=inner+" from Apna Collage";


//Project 2
// let a=document.querySelectorAll(".box");
// let div1=a[0].innerText;
// a[0].innerText=div1+" hello1";
// let div2=a[1].innerText;
// a[1].innerText=div2+" hello2";
// let div3=a[2].innerText;
// a[2].innerText=div3+" hello3";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

//or
// let a=document.querySelectorAll(".box");
// let idx=1;
// for(div of a){
//     div.innerText=`hello ${idx}`;
//     idx++;
// }

//project 3
// newbtn=document.createElement("button");
// newbtn.innerText="Click Me!";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";

// let body=document.querySelector("body");
// body.prepend(newbtn);

//project 4
// let para=document.querySelector("p");
// console.dir(para);
// para.style.color="green";          //in style.css
// let para=document.querySelector("p");
// console.log(para);
// let a=para.getAttribute("class");

//Project 5
class User{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewdate(){
        console.log("name: " + this.name + ", age: " + this.age);
    }
}

class Admin{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    edit(){
        
    }
}

obj1 = new User("Sri Charan", 20);
obj1.viewdate();