const buttonToggle = document.getElementById('toggleTheme')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('dark')
})