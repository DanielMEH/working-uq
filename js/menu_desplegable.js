/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
var button = document.querySelector('.button');
var nav_act = document.querySelector('.nav_act');
button.addEventListener('click', function () {
    nav_act.classList.toggle('activo');
}); 

