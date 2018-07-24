// # START EDITING YOUR JAVASCRIPT HERE
// ===============
const generateUnique = length =>
  Math.random().toString(36).substring(2, 2 + length)

const makeTask = value => {
  const id = generateUnique(5)
  const task = document.createElement('li')
  const taskContainer = tasklist.querySelector('.tasks')

  task.classList.add('task')
  task.innerHTML = `
    <input type="checkbox" class="vh" id="done${id}" name="done${id}">
    <label for="done${id}">
      <svg viewBox="0 0 20 15">
        <use xlink:href="#check"></use>
      </svg>
    </label>
    <div>${value}</div>
    <button class="task__trash">
      <svg viewBox="0 0 16 20">
        <use xlink:href="#trash"></use>
      </svg>
    </button>
  `
  taskContainer.appendChild(task)
}

const tasklist = document.querySelector('.tasklist')
const taskContainer = tasklist.querySelector('.tasks')
const newTaskForm = tasklist.querySelector('form')

newTaskForm.addEventListener('submit', event => {
  event.preventDefault()
  const form = event.target
  const input = form.elements.add
  const task = input.value.trim()

  if (!task) return

  makeTask(task)
  input.value = ''
  input.focus()
})

taskContainer.addEventListener('click', event => {
  const { target } = event
  if (!target.matches('button')) return

  const item = target.closest('li')
  taskContainer.removeChild(item)
})
