const addElement = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const finishedTask = document.querySelector("#task-finished");
const input = document.getElementById("task-input");

addElement.addEventListener("click", () => {
  addTask();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.className === "fa-solid fa-check") {
    parentTask = e.target.parentElement.parentElement;
    finishedTask.appendChild(parentTask);
  }
});

function addTask() {
  let task = document.createElement("div");
  task.innerHTML = `<p></p><button class="btn"><i class="fa-solid fa-check"></i></button>`;
  task.innerText = input.value
  task.classList = "task";
  taskList.appendChild(task);
  input.value = input.defaultValue;
}
