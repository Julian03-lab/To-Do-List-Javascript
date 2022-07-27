const addElement = document.querySelector("#add-task");

addElement.addEventListener("click", () => {
  const lista = document.querySelector("#task-list");
  var task = document.createElement("div");
  task.innerHTML = 'Tarea 1<button><i class="fa-solid fa-check"></i></button>'
  task.classList = "task";
  lista.appendChild(task)
});
