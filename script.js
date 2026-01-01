const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function next() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prev() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});
