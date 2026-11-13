// ==============================
// DOM ELEMENTS
// ==============================

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const formMessage = document.getElementById("formMessage");

const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

const pendingEmpty = document.getElementById("pendingEmpty");
const completedEmpty = document.getElementById("completedEmpty");

const currentDay = document.getElementById("currentDay");
const currentDate = document.getElementById("currentDate");


// ==============================
// DATA
// ==============================

let tasks = JSON.parse(localStorage.getItem("taskFlowTasks")) || [];


// ==============================
// DATE
// ==============================

function displayCurrentDate() {
    const now = new Date();

    currentDay.textContent = now.toLocaleDateString("en-US", {
        weekday: "long"
    });

    currentDate.textContent = now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}


// ==============================
// SAVE TASKS
// ==============================

function saveTasks() {
    localStorage.setItem("taskFlowTasks", JSON.stringify(tasks));
}


// ==============================
// FORMAT TIMESTAMP
// ==============================

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}


// ==============================
// CREATE TASK
// ==============================

function addTask(text) {

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString(),
        completedAt: null
    };

    tasks.unshift(newTask);

    saveTasks();

    renderTasks();
}


// ==============================
// DELETE TASK
// ==============================

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();

    renderTasks();
}


// ==============================
// TOGGLE COMPLETE
// ==============================

function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {

            const completed = !task.completed;

            return {
                ...task,
                completed: completed,
                completedAt: completed
                    ? new Date().toISOString()
                    : null
            };
        }

        return task;
    });

    saveTasks();

    renderTasks();
}


// ==============================
// EDIT TASK
// ==============================

function editTask(id) {

    const taskElement = document.querySelector(
        `[data-id="${id}"]`
    );

    if (!taskElement) return;

    const task = tasks.find(task => task.id === id);

    if (!task) return;

    const taskTextElement =
        taskElement.querySelector(".task-text");

    const originalText = task.text;

    const input = document.createElement("input");

    input.type = "text";
    input.className = "edit-input";
    input.value = originalText;
    input.maxLength = 120;

    taskTextElement.replaceWith(input);

    input.focus();

    input.select();


    function saveEdit() {

        const newText = input.value.trim();

        if (!newText) {
            renderTasks();
            return;
        }

        tasks = tasks.map(item => {

            if (item.id === id) {
                return {
                    ...item,
                    text: newText
                };
            }

            return item;
        });

        saveTasks();

        renderTasks();
    }


    input.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            saveEdit();
        }

        if (event.key === "Escape") {
            renderTasks();
        }
    });


    input.addEventListener("blur", saveEdit);
}


// ==============================
// CREATE TASK ELEMENT
// ==============================

function createTaskElement(task) {

    const taskItem = document.createElement("article");

    taskItem.className = "task-item";

    if (task.completed) {
        taskItem.classList.add("completed-task");
    }

    taskItem.dataset.id = task.id;


    // Complete button
    const completeButton =
        document.createElement("button");

    completeButton.className = "complete-btn";

    completeButton.type = "button";

    completeButton.setAttribute(
        "aria-label",
        task.completed
            ? "Mark task as pending"
            : "Mark task as complete"
    );

    completeButton.textContent =
        task.completed ? "✓" : "";


    // Task content
    const taskContent =
        document.createElement("div");

    taskContent.className = "task-content";


    const taskText =
        document.createElement("p");

    taskText.className = "task-text";

    taskText.textContent = task.text;


    const taskTime =
        document.createElement("span");

    taskTime.className = "task-time";

    if (task.completed && task.completedAt) {

        taskTime.textContent =
            `Completed ${formatTimestamp(task.completedAt)}`;

    } else {

        taskTime.textContent =
            `Added ${formatTimestamp(task.createdAt)}`;
    }


    taskContent.appendChild(taskText);
    taskContent.appendChild(taskTime);


    // Action buttons
    const actions =
        document.createElement("div");

    actions.className = "task-actions";


    const editButton =
        document.createElement("button");

    editButton.type = "button";

    editButton.className =
        "action-btn edit-btn";

    editButton.textContent = "Edit";


    const deleteButton =
        document.createElement("button");

    deleteButton.type = "button";

    deleteButton.className =
        "action-btn delete-btn";

    deleteButton.textContent = "Delete";


    actions.appendChild(editButton);
    actions.appendChild(deleteButton);


    // Event listeners
    completeButton.addEventListener(
        "click",
        () => toggleTask(task.id)
    );

    editButton.addEventListener(
        "click",
        () => editTask(task.id)
    );

    deleteButton.addEventListener(
        "click",
        () => deleteTask(task.id)
    );


    taskItem.appendChild(completeButton);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(actions);

    return taskItem;
}


// ==============================
// RENDER TASKS
// ==============================

function renderTasks() {

    pendingTasks.innerHTML = "";
    completedTasks.innerHTML = "";

    const pending =
        tasks.filter(task => !task.completed);

    const completed =
        tasks.filter(task => task.completed);


    // Pending tasks
    pending.forEach(task => {

        pendingTasks.appendChild(
            createTaskElement(task)
        );
    });


    // Completed tasks
    completed.forEach(task => {

        completedTasks.appendChild(
            createTaskElement(task)
        );
    });


    // Counts
    pendingCount.textContent =
        `${pending.length} pending`;

    completedCount.textContent =
        `${completed.length} completed`;


    // Empty states
    pendingEmpty.style.display =
        pending.length === 0
            ? "block"
            : "none";

    completedEmpty.style.display =
        completed.length === 0
            ? "block"
            : "none";
}


// ==============================
// FORM SUBMISSION
// ==============================

taskForm.addEventListener("submit", event => {

    event.preventDefault();

    const text = taskInput.value.trim();

    if (!text) {

        formMessage.textContent =
            "Please enter a task before adding it.";

        taskInput.focus();

        return;
    }


    formMessage.textContent = "";

    addTask(text);

    taskInput.value = "";

    taskInput.focus();
});


// ==============================
// INITIALIZE APP
// ==============================

displayCurrentDate();

renderTasks();