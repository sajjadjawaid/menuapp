let menu= document.querySelector('#bars');
let navbar=document.querySelector('.navbar');
let card=document.querySelector('.card');
let breakfast=document.querySelector('.breakfast');
let lunch= document.querySelector('.lunch');
let dinner=document.querySelector('.dinner');
let dessert=document.querySelector('.dessert');
let break1= document.querySelector('#break');
let khana= document.querySelector('#khana');
let din= document.querySelector('#din');
let des=document.querySelector("#des");
let all=document.querySelector('.active');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('on');
    card.classList.toggle('on');
}
// all.onclick=()=>{
//     breakfast.style.display="flex";
//     lunch.style.display="flex";
//     dinner.style.display="flex";
//     dessert.style.display="flex";
// }
break1.onclick=()=>{
    
    lunch.style.display="none";
    dinner.style.display="none";
    dessert.style.display="none";
    breakfast.style.display="flex";

}
khana.onclick=()=>{
    
    breakfast.style.display="none";
    dinner.style.display="none";
    dessert.style.display="none";
    lunch.style.display="flex";

}
din.onclick=()=>{
    breakfast.style.display="none";
    dessert.style.display="none";
    lunch.style.display="none";
    dinner.style.display="flex";
}
des.onclick=()=>{
    breakfast.style.display="none";
    lunch.style.display="none";
    dinner.style.display="none";
    dessert.style.display="flex";
}
all.onclick=()=>{
    breakfast.style.display="flex";
    lunch.style.display="flex";
    dinner.style.display="flex";
    dessert.style.display="flex";
}