const  a=Math.floor(Math.random()*6+1);
const  b=Math.floor(Math.random()*6+1);

console.log(a);
console.log("images/dice"+a+".png")
document.getElementsByClassName("img1")[0].src="images/dice"+a+".png"
document.getElementsByClassName("img2")[0].src="images/dice"+b+".png"
if (a>b){
    document.getElementsByClassName("title")[0].innerHTML="Player one is the winner";
}
if(b>a){
    document.getElementsByClassName("title")[0].innerHTML="Player two is the winner";

}
if(a==b){
    document.getElementsByClassName("title")[0].innerHTML="Draw";

}