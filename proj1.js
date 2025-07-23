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

