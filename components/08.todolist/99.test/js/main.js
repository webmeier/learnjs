/* globals zlFetch */

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

// Adding task
const todolist = document.querySelector('.todolist')

const makeTaskElement = ({ done, name, id }) => {
  const task = document.createElement('li')
  task.classList.add('task')
  task.innerHTML = `<input
      type="checkbox"
      name="${id}"
      id="${id}"
      class="visually-hidden"
      ${done ? 'checked' : ''}
    />
    <label for="${id}">
      <svg viewBox="0 0 20 15">
        <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
      </svg>
    </label>
    <input type="text" class="task__name" value="${name}"></input>
    <button type="button" class="task__delete-button">
      <svg viewBox="0 0 20 20">
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
      </svg>
    </button>`

  return task
}

// Keyboard stuff
// Toggling Chcekboxes for done with enter key
todolist.addEventListener('keydown', ev => {
  if (ev.key === 'Enter' && ev.target.matches('input[type=checkbox]')) {
    ev.preventDefault()
    const checkbox = ev.target
    // Because changing checkbox.checked doesn't trigger change event
    checkbox.click()
  }
})

// Ajax stuff
const rootendpoint = 'https://api.learnjavascript.today/tasklist/users/zellwk'

// Get and create list of tasks
zlFetch(`https://api.learnjavascript.today/tasklist/users/zellwk/tasks`)
  .then(res => {
    console.log(res.body)
    const tasks = res.body
    const tasksDiv = todolist.querySelector('.todolist__tasks')

    // Create and append task
    tasks.forEach(t => {
      const task = makeTaskElement(t)
      tasksDiv.appendChild(task)
    })
  })

// Creating a task and save it to database
todolist.addEventListener('submit', ev => {
  ev.preventDefault()

  // Get value of task
  const newTaskField = todolist.querySelector('input')
  const inputValue = newTaskField.value.trim()

  // Prevent adding of empty task
  if (!inputValue) return

  // Create and append task
  const submitButton = todolist.querySelector('button[type=submit]')
  submitButton.disabled = true

  // Clear input field
  newTaskField.value = ''

  // Normal UI
  // zlFetch('https://api.learnjavascript.today/tasklist/users/zellwk/tasks', {
  //   method: 'post',
  //   body: {
  //     name: inputValue
  //   }
  // })
  //   .then(res => {
  //     const t = res.body
  //     const task = makeTaskElement(t)
  //     tasksDiv.appendChild(task)

  //     // Bring focus back to input field
  //     newTaskField.focus()

  //     // Allow form submission again
  //     submitButton.disabled = false
  //   })

  // Optimistic UI... actually quite possible...
  const id = 'tempID'
  const task = makeTaskElement({ id, name: inputValue, done: false })
  tasksDiv.appendChild(task)

  // Bring focus back to input field
  newTaskField.focus()

  // Allow form submission again
  submitButton.disabled = false

  zlFetch('https://api.learnjavascript.today/tasklist/users/zellwk/tasks', {
    method: 'post',
    body: {
      name: inputValue
    }
  })
    .then(res => {
      // Find old task and replace id and done with new one...
      const t = res.body
      const task = tasksDiv.querySelector(`#${id}`)
      task.id = t.id
      task.name = t.id
      task.done = t.done
      task.nextElementSibling.for = t.id
      task.parentElement.querySelector('.task__name').style.color = 'red'
      task.parentElement.querySelector('.task__name').value = t.name
    })
    .catch(err => {
      // Remove task so no more...
      task.parentElement.removeChild(task)

      // Flash an error... But how to flash?
      // Create a flash error thing somewhere
      console.log(err)
    })
})

// Deleting Tasks (Lesson 4)
// Need a way to test failing endpoints... OH! Simply don't send the right info and it'll fail.
const tasksDiv = todolist.querySelector('.todolist__tasks')
tasksDiv.addEventListener('click', ev => {
  if (!ev.target.matches('.task__delete-button')) return

  const taskDiv = ev.target.parentElement
  const tasksDiv = taskDiv.parentElement
  const id = taskDiv.querySelector('input[type=checkbox]').id

  tasksDiv.removeChild(taskDiv)

  // Trigger empty state
  if (tasksDiv.children.length === 0) tasksDiv.innerHTML = ''

  // Optimistic UI Delete
  zlFetch(`https://api.learnjavascript.today/tasklist/users/zellwk/tasks/${id}`, { method: 'delete' })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
      const taskIndex = tasksDiv.findIndex(div => div === taskDiv)
      tasksDiv.insertBefore(taskDiv, taskIndex + 1)
    })
})

// Normal
// HTML and CSS
// Creating a task
// Deleting a task

// Ajax
// Todolist API
// Getting tasks
// Creating a task
// Deleting a task
// Editing a task... Haven't made this, but quite clear how to make now
