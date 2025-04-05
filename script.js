// select
let changebtn = document.querySelector(".changethemebtn");
let innercont= document.querySelector(".innercontainer");
let genrateBtn = document.querySelector('.generatebtn');
let passWordBox = document.querySelector('.pass');
let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let passwordLength = 8;
// fun
changebtn.addEventListener('click',function(){
    let r= Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    innercont.style.backgroundColor=`rgb(${r},${g},${b})`
})

genrateBtn.addEventListener('click',function(){
 let password =""
 for(let i = 1; i<=passwordLength;i++){
    let randomIndex = Math.floor(Math.random()*alphabets.length);
    password+=alphabets[randomIndex];
 }
 passWordBox.textContent = password
})

