/* globals DOMPurify zlFetch */

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
// const apiURL = 'http://api.learnjavascript.today/tasklist'
const apiURL = 'http://localhost:4000/tasklist'

const generateUnique = length =>
  Math.random().toString(36).substring(2, 2 + length)

const makeTask = ({ task: name, id, done }) => {
  const task = document.createElement('li')
  const taskContainer = tasklist.querySelector('.tasks')

  task.classList.add('task')
  task.innerHTML = DOMPurify.sanitize(`
    <input type="checkbox" class="vh" id="${id}" name="${id}">
    <label for="${id}">
      <svg viewBox="0 0 20 15">
        <use xlink:href="#check"></use>
      </svg>
    </label>
    <div>${name}</div>
    <button class="task__trash">
      <svg viewBox="0 0 16 20">
        <use xlink:href="#trash"></use>
      </svg>
    </button>
  `)
  taskContainer.appendChild(task)
}

const tasklist = document.querySelector('.tasklist')
const taskContainer = tasklist.querySelector('.tasks')
const newTaskForm = tasklist.querySelector('form')

zlFetch(`${apiURL}/users/zellwk/tasks`)
  .then(response => {
    const tasks = response.body
    tasks.forEach(task => makeTask(task))
  })
  .catch(error => console.log(error))

newTaskForm.addEventListener('submit', event => {
  event.preventDefault()
  const form = event.target
  const input = form.elements.add
  const task = input.value.trim()

  if (!task) return

  // One way of doing it
  zlFetch(`${apiURL}/users/zellwk/tasks`, {
    method: 'post',
    body: { task }
  })
    .then(response => {
      console.log(response)
      makeTask(task)
      input.value = ''
      input.focus()
    })
    .catch(console.log)
})

taskContainer.addEventListener('click', event => {
  const { target } = event
  if (!target.matches('button')) return

  const item = target.closest('li')
  taskContainer.removeChild(item)
})
