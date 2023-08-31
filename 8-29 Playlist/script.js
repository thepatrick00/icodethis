tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '',
        accent: '',
      },
      fontFamily: {
        title: ['sans-serif'],
        body: ['sans-serif'],
      },
    },
  },
}
const articles = [...document.querySelectorAll('article')]
let activeArticle = articles[2]

// A combination of css hover styles + js
window.addEventListener('DOMContentLoaded', () => {
  addInitialStyles()
  const heading = document.querySelector('h1')

  articles.slice(1).forEach((article) => {
    article.addEventListener('mouseenter', () => {
      removeInitialStyles()
      activeArticle = article
      // change header song name
      const songName = article.querySelector('h1').textContent
      const artistName =
        article.querySelectorAll('span')[1].textContent

      heading.textContent = songName + ' | ' + artistName
    })
  })

  document
    .querySelector('#videos-wrapper')
    .addEventListener('mouseleave', () => {
      addInitialStyles()
    })
})

function addInitialStyles() {
  activeArticle.classList.add(
    'bg-gradient-to-r',
    'from-sky-700',
    'to-sky-500',
    '-mx-6',
    'py-4',
    'px-6',
    'shadow-lg',
    'shadow-sky-900/50',
    'text-white'
  )

  const span = activeArticle.querySelectorAll('span')
  span[1].classList.add('text-white/80')
}

function removeInitialStyles() {
  activeArticle.classList.remove(
    'bg-gradient-to-r',
    'from-sky-700',
    'to-sky-500',
    '-mx-6',
    'py-4',
    'px-6',
    'shadow-lg',
    'shadow-sky-900/50',
    'text-white'
  )

  const span = activeArticle.querySelectorAll('span')
  span[1].classList.remove('text-white/80')
}


const chevron = document.querySelector('.fa-chevron-down');
const videosWrapper = document.querySelector('#videos-wrapper')

chevron.addEventListener('click', () => {
  videosWrapper.classList.toggle('hidden');
  chevron.classList.toggle('rotate-180')
})