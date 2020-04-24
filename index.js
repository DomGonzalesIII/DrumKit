/* jshint esversion: 6 */

var drums = document.querySelectorAll('.drum');

drums.forEach((drum, i) => {
  drum.addEventListener('click', handleClick);
});

function handleClick() {
  alert("I've been clicked!");
}
