"use strict";const title=document.querySelector(".js-title"),text=document.querySelector(".js-paragraph"),url="https://api.adviceslip.com/advice",button=document.querySelector(".js-button"),getAdvice=()=>{fetch(url).then(t=>t.json()).then(t=>{title.innerHTML="ADVICE #"+t.slip.id,text.innerHTML=`"${t.slip.advice}"`})};button.addEventListener("click",getAdvice);