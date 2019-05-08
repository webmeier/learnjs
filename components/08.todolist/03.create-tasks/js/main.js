/* globals DOMPurify */
// # START EDITING YOUR JAVASCRIPT HERE
// ===============

// Functions
const generateUniqueString = length =>
  Math.random().toString(36).substring(2, 2 + length)

const makeTaskEl = taskname => {
  const uniqueID = generateUniqueString(10)
  const taskEl = document.createElement('li')
  taskEl.classList.add('task')
  taskEl.innerHTML = DOMPurify.sanitize(`
    <input type="checkbox" id="${uniqueID}" />
    <label for="${uniqueID}">
      <svg viewBox="0 0 20 15">
        <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
      </svg>
    </label>
    <span class="task__name">${taskname}</span>
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

todolist.addEventListener('submit', ev => {
  ev.preventDefault()

  // Get value of task
  const newTaskField = todolist.querySelector('input')
  const inputValue = newTaskField.value.trim()

  // Clear the new task field
  newTaskField.value = ''

  // Bring focus back to input field
  newTaskField.focus()

  // Prevent adding of empty task
  if (!inputValue) return

  // Create task
  const taskEl = makeTaskEl(inputValue)

  // Append to the DOM
  const tasksEl = todolist.querySelector('.todolist__tasks')
  tasksEl.appendChild(taskEl)
})
