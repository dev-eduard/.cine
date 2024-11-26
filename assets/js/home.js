//////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__zoomIn");
        entry.target.style.opacity = 1;
      } else {
        entry.target.classList.remove("animate__animated", "animate__zoomIn");
        entry.target.style.opacity = 0;
      }
    });
  });

  elements.forEach((i) => observer.observe(i));
});

const notificar = document.getElementById("notificar");
let notificou = false;

if (!notificou) {
  setTimeout(() => {
    notificar.classList.add("notficacao");
    notificou = true;
  }, 5000);
}

const submenu = document.getElementById("submenu");

notificar.addEventListener("click", function () {
  submenu.classList.toggle("off");
  notificar.classList.remove("notficacao");
});
//////////////////////////////

const dias = [11, 10, 9];

const diasdiv = [
  document.getElementById("dias1"),
  document.getElementById("dias2"),
  document.getElementById("dias3"),
];

const diadehoje = new Date().getDate();

for (let i = 0; i < dias.length; i++) {
  diasdiv[i].innerHTML = diadehoje - dias[i] + " dias";
}
