var cursor = document.querySelector('.cursor');
var a_elem = Array.from(document.querySelectorAll('a'));

function move(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
}

window.addEventListener('DOMContentLoaded', move);
window.addEventListener('mousemove', move);
document.addEventListener('mouseover', () => cursor.style.opacity = 1);
document.addEventListener('mouseout', () => cursor.style.opacity = 0);

document.addEventListener('mousedown', function(e){
    cursor.classList.add("click");
  }
);

document.addEventListener('mouseup', function(e){
    cursor.classList.remove("click");
  }
);

a_elem.forEach(elem => {
    elem.addEventListener('mouseover', function(x) {
      cursor.classList.remove('outa');
      cursor.classList.add('ina');
  })
//To remove the class when it doesn't hover the text
    elem.addEventListener('mouseleave', function (x) {
      cursor.classList.remove('ina');
      cursor.classList.add('outa');
  })
});