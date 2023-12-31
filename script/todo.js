document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    const completedList = document.getElementById("completed-list");
    const deleteCompletedButton = document.getElementById("delete-completed-button");
  
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.draggable = true;
  
        const complete = document.createElement("span");
        complete.className = "done-text";
        complete.innerText = "Done";
        complete.addEventListener("click", function() {
          li.removeChild(complete);
          completedList.appendChild(li);
        });
  
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "material-icons delete-icon";
        deleteIcon.innerText = "delete";
        deleteIcon.addEventListener("click", function() {
          li.remove();
        });
  
        const bullet = document.createElement("span");
        bullet.innerHTML = "&#8226;";
  
        li.appendChild(complete);
        li.appendChild(bullet);
        li.appendChild(deleteIcon);
        li.appendChild(document.createTextNode(" " + todoText));
  
        todoList.appendChild(li);
        todoInput.value = "";
      }
    });
  
    deleteCompletedButton.addEventListener("click", function() {
      while (completedList.firstChild) {
        completedList.removeChild(completedList.firstChild);
      }
    });
  
    // Drag and Drop Functionality
    let draggedItem = null;
  
    todoList.addEventListener("dragstart", function(event) {
      draggedItem = event.target;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/html", draggedItem);
    });
  
    completedList.addEventListener("dragover", function(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    });
  
    completedList.addEventListener("dragenter", function(event) {
      event.target.classList.add("drag-over");
    });
  
    completedList.addEventListener("dragleave", function(event) {
      event.target.classList.remove("drag-over");
    });
  
    completedList.addEventListener("drop", function(event) {
      event.preventDefault();
      const target = event.target;
      target.classList.remove("drag-over");
      target.appendChild(draggedItem);
      draggedItem = null;
    });
  });
  