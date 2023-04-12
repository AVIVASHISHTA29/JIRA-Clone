const openModalBtn = document.querySelector(".add-task-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const addTaskForm = document.getElementById("add-task-form");

const myBtn = document.querySelector("#add-task-btn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

myBtn.addEventListener("click", (event) => {
  // standard code to prevent your page from reloading
  event.preventDefault();

  const taskName = document.getElementById("task-name").value;
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("due-date").value;
  const status = document.getElementById("status").value;

  addTask(taskName, priority, dueDate, status);
  modal.style.display = "none";
});

function addTask(taskName, priority, dueDate, status) {
  console.log(status);
  if (status == "not-started") {
    // add it in the column of not started
    var list = document.getElementById("not-started");

    list.innerHTML += `
                        <li>
                          <p>${taskName}</p>
                          <p>${priority}</p>
                          <p>${dueDate}</p>
                          <p>${status}</p>
                        </li>
                      `;
  } else if (status == "in-progress") {
    // add it in the column of in-progress
  } else if (status == "completed") {
    // add it in the column of completed
  }
}
