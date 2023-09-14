const textDiv = document.querySelector('.text');
const taskInput = document.getElementById('task');
const container = document.querySelector('.container');
const clearAllButton = document.getElementById('clear-all-button');

let tasks = [];

function adjustContainerHeight() {
    const taskItemCount = tasks.length;
    const newHeight = 200 + taskItemCount * 50; 
    container.style.height = `${newHeight}px`;
}

function displayTasks() {
    textDiv.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-item';
        taskDiv.innerHTML = `
            <span class="task-content">${task}</span>
            <div class="button-container">
                <button class="edit-button" onclick="editTask(${index})">Edit</button>
                <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        textDiv.appendChild(taskDiv);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        displayTasks();
        taskInput.value = '';
        adjustContainerHeight();
    }
    else {
        alert('Please enter a task.');
    }
}

function editTask(index) {
    const newTaskText = prompt('Edit task:', tasks[index]);
    if (newTaskText !== null) {
        tasks[index] = newTaskText;
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
    adjustContainerHeight();
}
function clearAllTasks() {
    if (tasks.length > 0) {
        const confirmation = confirm("Are you sure you want to delete all tasks?");
        if (confirmation) {
            tasks = [];
            displayTasks();
            adjustContainerHeight();
        }
    }
}
clearAllButton.addEventListener('click', clearAllTasks);

displayTasks();