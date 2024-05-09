import './styles/style.scss'

// Theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const lightbtn = document.getElementById('light-btn')
  const darkBtn = document.getElementById('dark-btn')

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)

    if (theme === 'dark') {
      darkBtn.classList.add('active')
      lightbtn.classList.remove('active')
    } else {
      lightbtn.classList.add('active')
      darkBtn.classList.remove('active')
    }
  }

  lightbtn.addEventListener('click', () => {
    setTheme('light')
  })
  darkBtn.addEventListener('click', () => {
    setTheme('dark')
  })

   const prefersDarkScheme = window.matchMedia(
     '(prefers-color-scheme: dark)'
   ).matches
   const currentTheme =
     document.documentElement.getAttribute('data-theme') ||
     (prefersDarkScheme ? 'dark' : 'light')
   setTheme(currentTheme)
})
