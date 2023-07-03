const checkbox = document.getElementById('burger-toggle');
const body = document.body;
const html = document.documentElement;

checkbox.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('no-scroll');
    html.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
    html.classList.remove('no-scroll');
  }
});
