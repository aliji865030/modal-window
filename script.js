'use strict';
const modal=document.querySelector(`.modal`);
const overlay=document.querySelector(`.overlay`);
const btn=document.querySelector(`.close-modal`);
const btns =document.querySelectorAll(`.show-modal`);
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener(`click`,function(){
                   modal.classList.remove(`hidden`);
          overlay.classList.remove(`hidden`);
    });
}
const closeModal=function(){
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}
btn.addEventListener(`click`,function(){
   closeModal();
});
overlay.addEventListener(`click`,function(){
   closeModal();
});


document.addEventListener(`keydown`,function(e){
    if(e.key===`Escape`){
        if(!modal.classList.contains(`hidden`)){
          closeModal();
        }
    }


})