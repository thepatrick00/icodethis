tailwind.config = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '',
        accent: '#008ad3',
      },
      fontFamily: {
        title: ['sans-serif'],
        body: ['sans-serif'],
      },
    },
  },
}

const cheveron = document.querySelector('.fa-chevron-left')
const main = document.querySelector('#main')
const popup = document.querySelector('#popup')

cheveron.addEventListener('click', () => {
  main.classList.remove('animation-grow')
  main.classList.add('animation-shrink')
  popup.classList.remove('hidden')
  
  const id = setTimeout(() => {
    main.classList.remove('animation-shrink')
    main.classList.add('animation-grow')
    popup.classList.add('hidden')
  }, 3000)

})