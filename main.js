const email = document.querySelector('.email');
const error_icon = document.querySelector('.error img');
const error_text = document.querySelector('.error-text');
inputBx = document.querySelector('.inputBx');
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

email.addEventListener('keyup', function () {
  if (this.value.match(regExp)) {
    inputBx.style.borderColor = 'hsl(0, 36%, 70%)';
    error_icon.style.display = 'none';
    error_text.style.display = 'none';
  } else {
    inputBx.style.border = '2px solid hsl(0, 93%, 68%)';
    error_icon.style.display = 'block';
    error_text.style.display = 'block';
  }
  if (email.value === '') {
    inputBx.style.borderColor = 'hsl(0, 36%, 70%)';
    error_icon.style.display = 'none';
    error_text.style.display = 'none';
  }
});
