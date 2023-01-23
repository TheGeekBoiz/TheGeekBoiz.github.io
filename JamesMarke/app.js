console.log("Python Was Here")
function showContextMenu(show = true) {
  document.querySelector('.custom-cm').style.display = show ? 'block' : 'none';
}
window.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  showContextMenu();
  document.querySelector('.custom-cm').style.top = e.y + document.querySelector('.custom-cm').offsetHeight > window.innerHeight ? window.innerHeight - document.querySelector('.custom-cm').offsetHeight : e.y;
  document.querySelector('.custom-cm').style.left = e.x + document.querySelector('.custom-cm').offsetWidth > window.innerWidth ? window.innerWidth - document.querySelector('.custom-cm').offsetWidth : e.x;
});

window.addEventListener('click', () => {
  showContextMenu(false);
});