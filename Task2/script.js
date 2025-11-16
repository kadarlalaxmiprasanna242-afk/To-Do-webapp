const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Mark complete on click
  li.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("completed");
    }
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
});
