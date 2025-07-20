const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const pushBtn = document.querySelector("#push");

pushBtn.addEventListener("click", createTask);
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

function createTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("The task field is blank. Enter a task name and try again.");
    return;
  }

  const taskEl = document.createElement("div");
  taskEl.className = "task";
  taskEl.innerHTML = `
    <label>
      <input type="checkbox" onclick="toggleCheck(this)" />
      <p>${taskText}</p>
    </label>
    <div class="delete">
      <i class="uil uil-trash"></i>
    </div>
  `;

  // Delete button handler
  taskEl.querySelector(".delete").onclick = function () {
    taskEl.remove();
  };

  taskList.appendChild(taskEl);
  taskInput.value = "";

  taskList.scrollHeight >= 300
    ? taskList.classList.add("overflow")
    : taskList.classList.remove("overflow");
}

function toggleCheck(checkbox) {
  const text = checkbox.nextElementSibling;
  text.classList.toggle("checked", checkbox.checked);
}
