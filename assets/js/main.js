//////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__zoomIn');
        entry.target.style.opacity = 1;
      }
      else {
        entry.target.classList.remove('animate__animated', 'animate__zoomIn');
        entry.target.style.opacity = 0;
      }
    });
  });

  elements.forEach((i) => observer.observe(i));
});

const notificar = document.getElementById('notificar');
let notificou = false;

if (!notificou) {
  setTimeout(() => {
    notificar.classList.add('notficacao');
    notificou = true;
  }, 5000);
}


const submenu = document.getElementById('submenu');

notificar.addEventListener('click', function () {
  submenu.classList.toggle('off');
});
//////////////////////////////