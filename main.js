import './styles/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  const lightBtn = document.getElementById('light-btn')
  const darkBtn = document.getElementById('dark-btn')

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)

    if (theme === 'dark') {
      darkBtn.classList.add('active')
      lightBtn.classList.remove('active')
    } else {
      lightBtn.classList.add('active')
      darkBtn.classList.remove('active')
    }
    localStorage.setItem('theme', theme)
  }

  lightBtn.addEventListener('click', () => setTheme('light'))
  darkBtn.addEventListener('click', () => setTheme('dark'))

  const prefersDarkScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const savedTheme = localStorage.getItem('theme')
  const currentTheme = savedTheme || (prefersDarkScheme ? 'dark' : 'light')
  setTheme(currentTheme)
})
