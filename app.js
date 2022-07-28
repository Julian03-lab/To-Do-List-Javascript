const addElement = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const finishedTask = document.querySelector("#task-finished");
const input = document.getElementById("task-input");

addElement.addEventListener("click", () => {
  if (input.value != '') {
    addTask();
    
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != '') {
    addTask();
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.className === "fa-solid fa-check") {
    e.target.className = 'fa-solid fa-rotate-left'
    parentTask = e.target.parentElement.parentElement;
    finishedTask.appendChild(parentTask);
  }
});

finishedTask.addEventListener("click", (e) => {
  if (e.target.className === "fa-solid fa-rotate-left") {
    e.target.className = 'fa-solid fa-check'
    parentTask = e.target.parentElement.parentElement;
    taskList.appendChild(parentTask);
  }
});

function addTask() {
  let task = document.createElement("div");
  task.innerHTML = `<p></p><button class="btn"><i class="fa-solid fa-check"></i></button>`;
  task.children[0].innerText = input.value
  task.classList = "task";
  taskList.appendChild(task);
  input.value = input.defaultValue;
}
