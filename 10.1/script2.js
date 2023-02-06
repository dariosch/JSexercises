"use strict";

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 900000);
    header.style.color = `#${randomNumber}`;
  });
})();
