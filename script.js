const checkbox = document.getElementById('burger-toggle'),
  body = document.body,
  html = document.documentElement,
  form = document.getElementById('form'),
  nameInput = document.getElementById('name_input'),
  phoneInput = document.getElementById('phone_input');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('no-scroll');
    html.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
    html.classList.remove('no-scroll');
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  name = nameInput.value.trim();
  phone = phoneInput.value.trim();

  if (name === '') {
    alert('Пожалуйста, введите ваше имя');
    nameInput.focus();
    return;
  }

  if (phone === '') {
    alert('Пожалуйста, введите номер телефона');
    phoneInput.focus();
    return;
  }

  if (!isValidPhone(phone)) {
    alert('Пожалуйста, введите корректный номер телефона');
    phoneInput.focus();
    return;
  }

  this.submit();
});

function isValidPhone(phone) {
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
