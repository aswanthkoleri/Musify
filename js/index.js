'use strict';

var $$cookieDisclaimer = document.querySelector('.js-cookie-disclaimer');

if (!localStorage.getItem('cookieDisclaimer')) {
  $$cookieDisclaimer.classList.add('is-active');
}

$$cookieDisclaimer.querySelector('button').addEventListener('click', function () {
  localStorage.setItem('cookieDisclaimer', true);
  $$cookieDisclaimer.classList.remove('is-active');
});