function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  txt = document.getElementById('text');
  btn.addEventListener('click', () => txt.hasAttribute('hidden') ? txt.hidden = false : txt.hidden = true);
}
