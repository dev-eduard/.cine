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

  elements.forEach((el) => observer.observe(el));
});

const notificar = document.getElementById('notificar');
setInterval(function () {
  notificar.classList.add('notficacao');
}, 5000);

notificar.addEventListener('click', function () {
  notificar.classList.toggle('notficacao');
});
//////////////////////////////