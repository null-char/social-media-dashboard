document.getElementById('checkbox-label').addEventListener('click', () => {
  document.body.classList.toggle('light');
  // document.innerHTML === 'Dark Mode' ? modeToggle.innerHTML = 'Light Mode' : modeToggle.innerHTML = 'Dark Mode';
  document.getElementById('mode-text').innerHTML === 'Dark Mode' ? document.getElementById('mode-text').innerHTML = 'Light Mode' : document.getElementById('mode-text').innerHTML = 'Dark Mode';
})