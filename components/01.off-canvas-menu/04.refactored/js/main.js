// Your JavaScript goes here
{
  const toggleOffCanvas = _ => {
    document.body.classList.toggle('offsite-is-open')
  }

  const offsiteToggle = document.querySelector('.jsOffsiteToggle')
  offsiteToggle.addEventListener('click', toggleOffCanvas)
}
