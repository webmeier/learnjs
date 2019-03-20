/* globals DOMPurify zlFetch */

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
// const apiURL = 'http://api.learnjavascript.today/tasklist'
const apiURL = 'http://localhost:4000/tasklist'

const generateUnique = length =>
  Math.random().toString(36).substring(2, 2 + length)

const makeTask = ({ name, id, done }) => {
  const task = document.createElement('li')
  const taskContainer = tasklist.querySelector('.tasks')

  task.classList.add('task')
  task.innerHTML = DOMPurify.sanitize(`
    <input type="checkbox" class="vh" id="task-${id}" name="task-${id}">
    <label for="task-${id}">
      <svg viewBox="0 0 20 15">
        <title>Done</title>
        <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill="currentColor" fill-rule="nonzero" />
      </svg>
    </label>
    <div>${name}</div>
    <button class="task__trash">
      <svg viewBox="0 0 16 20">
        <title>Trash</title>
        <path d="M4 2l2-2h4l2 2h4v2H0V2h4zM1 6h14l-1 14H2L1 6zm5 2v10h1V8H6zm3 0v10h1V8H9z" fill="currentColor" fill-rule="nonzero" />
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
    console.log(tasks)
    tasks.forEach(makeTask)
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
