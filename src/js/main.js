"use strict";
const title = document.querySelector(".js-title");
const text = document.querySelector(".js-paragraph");
const url = "https://api.adviceslip.com/advice";
const button = document.querySelector(".js-button");

const getAdvice = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = `ADVICE #${data.slip.id}`;
      text.innerHTML = `"${data.slip.advice}"`;
    });
};

button.addEventListener("click", getAdvice);
