// доделуваме функција на button -от лево горе да се отвара со клик

const container = document.querySelector(".hero-container");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    container.classList.toggle("active");
  });
});