const scriptURL = 'https://script.google.com/macros/s/AKfycbzD9Vsr4JWhVPMwbDMvLHrHkwVEJNBjw0T3D3vn6ZHcU-fTgkCzjg_mg5D3-kXgOL4KFQ/exec'

const form = document.querySelector('form');
const subBtn = document.querySelector('.submit')

form.addEventListener('submit', e => {
  subBtn.disabled = true;
  subBtn.innerText = 'Submitting...'
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your message is sent." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})