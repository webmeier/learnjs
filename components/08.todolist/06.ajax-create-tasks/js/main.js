/* globals DOMPurify zlFetch */
// # START EDITING YOUR JAVASCRIPT HERE
// ===============

// REMEMBER TO CHANGE THIS TO YOUR OWN USERNAME AND PASSWORD
const username = 'turboduo'
const password = '12345678'
const rootendpoint = 'https://api.learnjavascript.today'

// Functions
const generateUniqueString = length =>
  Math.random().toString(36).substring(2, 2 + length)

const makeTaskEl = ({ id, name, done }) => {
  const taskEl = document.createElement('li')
  taskEl.classList.add('task')
  taskEl.innerHTML = DOMPurify.sanitize(`
    <input type="checkbox" id="${id}" />
    <label for="${id}">
      <svg viewBox="0 0 20 15">
        <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
      </svg>
    </label>
    <span class="task__name">${name}</span>
    <button type="button" class="task__delete-button">
      <svg viewBox="0 0 20 20">
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </svg>
    </button>`
  )
  return taskEl
}

// Execution
const todolist = document.querySelector('.todolist')

// Getting and fetching tasks
zlFetch(`${rootendpoint}/tasks`, {
  username,
  password
})
  .then(response => {
    // Append tasks to DOM
    const tasks = response.body
    const tasksEl = todolist.querySelector('.todolist__tasks')
    tasks.forEach(task => {
      const taskEl = makeTaskEl(task)
      tasksEl.appendChild(taskEl)
    })

    // Change empty state text
    const emptyState = todolist.querySelector('.todolist__empty-state')
    emptyState.textContent = 'Your todo list is empty. Hurray! 🎉'
  })
  .catch(console.log)

// Adding a task to the DOM
todolist.addEventListener('submit', ev => {
  ev.preventDefault()

  // Get value of task
  const newTaskField = todolist.querySelector('input')
  const inputValue = DOMPurify.sanitize(newTaskField.value.trim())

  // Prevent adding of empty task
  if (!inputValue) return

  // Disable button
  const button = todolist.querySelector('button')
  button.setAttribute('disabled', true)

  // Give indication that we're adding a task
  const buttonTextEl = button.querySelector('span')
  buttonTextEl.textContent = 'Adding task...'

  zlFetch(`${rootendpoint}/tasks`, {
    method: 'post',
    username,
    password,
    body: {
      name: inputValue
    }
  })
    .then(response => {
      // Append task to DOM
      const task = response.body
      const taskEl = makeTaskEl(task)
      const tasksEl = todolist.querySelector('.todolist__tasks')
      tasksEl.appendChild(taskEl)

      // Clear the new task field
      newTaskField.value = ''

      // Bring focus back to input field
      newTaskField.focus()
    })
    .catch(console.log)
    .finally(_ => {
      // Enables button
      button.removeAttribute('disabled')

      // Change button text back to original text
      buttonTextEl.textContent = 'Add task'
    })
})

// Deleting a task from the DOM
const tasksDiv = todolist.querySelector('.todolist__tasks')
tasksDiv.addEventListener('click', ev => {
  if (!ev.target.matches('.task__delete-button')) return

  const taskDiv = ev.target.parentElement
  const tasksDiv = taskDiv.parentElement

  // Removes the task
  tasksDiv.removeChild(taskDiv)

  // Triggers empty state
  if (tasksDiv.children.length === 0) tasksDiv.innerHTML = ''
})
