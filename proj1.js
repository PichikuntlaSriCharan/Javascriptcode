//1 project
const Product={
    item : "Ball pen",
    Rating : "5 star",
    Price : 270,
    offer : "Deal of the day",
}

console.log(Product);
console.log(typeof Product);


const Profile = {
    Name : "P.Sri Charan",
    Followers : 50,
    Following : 0,
    isfolllow : true,
}
console.log(Profile);
console.log(typeof Profile);
console.log(typeof Profile["Name"]);
console.log(typeof Profile["Following"]);
console.log(typeof Profile["Followers"]);
console.log(typeof Profile["isfolllow"]);
/*Multiple lines*/
//single line
//2 project
let num=prompt("Enter a number : ");
if (num%5 ==0){
    console.log(num,"is multiple of 5");
}
else{
    console.log(num,"is NOT multiple of 5");
}

//3 project
let score=prompt("Enter score : ");
if(score<=100 && score>80){
    console.log("A grade");
}
else if(score>70 && score<=70){
    console.log("B grade");
}
else if(score>60 && score<=69){
    console.log("C grade");
}
else if(score>50 && score<=59){
    console.log("D grade");
}
else{
    console.log("Fail");
}

//4 project
for(let ii=0;ii<=100;ii++){
    console.log(ii);
}
console.log("Project 5")
//5 Project
for(let jj=0;jj<=100;jj++){
    if(jj%2 ==0){
        console.log(jj);
    }
}

//6 Project
let game_num=25;
do{
    var l=prompt("Enter any number to guess game number : ");

}while(l!=game_num);
console.log("Congratulations");

//7 Project
name=prompt("Enter user-name : ");
let lenn=name.length1;
let id="@" + name + lenn;
console.log(id);

//5 Project
let marks = [85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log(avg);


//6 Project
let iii=0;
ar=[250,645,300,900,50];
for(let val of ar){
    let offer=val/10;
    ar[iii]=ar[iii]-offer;
    console.log(ar[iii]);
    iii++;
}