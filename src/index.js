document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form'); //add event listener at form

  form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent from submitting

    const taskDescription = document.getElementById('new-task-description').value; //call task description

    buildToDo(taskDescription); //pass value to function

  });
});

function buildToDo(taskItem) {
  const li = document.createElement('li'); //add submitted input to list item
  li.textContent = taskItem;

  const task = document.getElementById('tasks'); //append list item to ul
  task.appendChild(li);
};