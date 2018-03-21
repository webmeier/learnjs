// Your JavaScript goes here
const offsiteToggle = document.querySelector('.jsOffsiteToggle')

offsiteToggle.addEventListener('click', _ => {
  document.body.classList.toggle('offsite-is-open')
})
