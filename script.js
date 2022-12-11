"use strict";
const readClick = document.querySelector(".read");
const asteRisk = document.querySelectorAll(".asterisk");
const notifyRemoved = document.querySelectorAll(".notify");
const number = document.querySelector(".number");
readClick.addEventListener("click", function () {
  asteRisk.forEach(function (element) {
    element.style.display = "none";
  });
  notifyRemoved.forEach((element) => {
    element.style.backgroundColor = "transparent";
  });
  number.textContent = 0;
});
