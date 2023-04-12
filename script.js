const addTaskBtn = document.querySelector(".add-task-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const addTaskForm = document.getElementById("add-task-form");

function addTask(taskName, priority, dueDate, status) {
  const column = document.getElementById(status);
  const taskList = column.querySelector(".task-list");

  const listItem = document.createElement("li");
  listItem.innerHTML = `
        <div>${taskName}</div>
        <div>
          <span class="chip priority">${
            priority.charAt(0).toUpperCase() + priority.slice(1)
          }</span>
          <span class="chip status">${status}</span>
        </div>
        <div>Due: ${dueDate}</div>
      `;
  taskList.appendChild(listItem);
}

addTaskBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskName = document.getElementById("task-name").value;
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("due-date").value;
  const status = document.getElementById("status").value;

  addTask(taskName, priority, dueDate, status);

  addTaskForm.reset();
  modal.style.display = "none";
});
