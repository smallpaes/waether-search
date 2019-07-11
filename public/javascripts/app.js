const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const infoTitle = document.querySelector('.form-bottom h6')
const infoContent = document.querySelector('.form-bottom p')
const formBottom = document.querySelector('.form-bottom')
const formContainer = document.querySelector('.form-container')
weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const location = searchInput.value

  fetch(`http://localhost:3000/search?address=${location}`)
    .then(response => {
      response.json()
        .then(data => {
          formBottom.classList.add('d-block', 'animated', 'fadeInUp')
          if (data.error) {
            infoContent.textContent = data.error
          } else {
            infoTitle.textContent = data.location
            infoContent.textContent = data.forecast
          }

          // listen for animation end
          formBottom.addEventListener('animationend', () => {
            formBottom.classList.remove('animated', 'fadeInUp')
          })
        })
    })

})


window.addEventListener('scroll', event => {
  let searchSection = document.getElementById('search')
  let bottomPosition = window.scrollY + window.innerHeight

  if (bottomPosition >= searchSection.offsetTop) {
    formContainer.classList.add('jackInTheBox', 'animated')
  }
})