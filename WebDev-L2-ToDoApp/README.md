# TaskFlow – To-Do Web App

A responsive and interactive task management web application built using **HTML5, CSS3 and Vanilla JavaScript**.

This project was created as part of the **Oasis Infobyte Web Development and Designing Internship – Level 2, Task 3**.

## Project Overview

TaskFlow is a browser-based To-Do application that allows users to create, manage and organize their daily tasks.

Users can add new tasks, mark them as completed, edit existing tasks and permanently delete tasks. Tasks are automatically separated into **Pending Tasks** and **Completed Tasks** lists.

The application also includes bonus functionality such as timestamps and `localStorage` persistence.

## Features

- Add new tasks
- Display newly added tasks in the Pending Tasks list
- Mark pending tasks as completed
- Automatically move completed tasks to the Completed Tasks list
- Edit task text inline
- Delete tasks permanently
- Display pending task count
- Display completed task count
- Display task timestamps
- Save tasks using browser `localStorage`
- Restore tasks after page refresh
- Friendly empty-state messages
- Responsive design
- Keyboard support while editing tasks
- Clean and modern user interface

## Technologies Used

- **HTML5** – Semantic page structure
- **CSS3** – Styling, responsive design, Grid and Flexbox
- **JavaScript** – DOM manipulation and application logic
- **localStorage** – Persistent task storage
- **Google Fonts** – Inter and Playfair Display

## Project Structure

```text
WebDev-L2-ToDoApp/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Main Sections

### Add Task

The application provides an input field and an **Add Task** button.

Users enter their task and submit the form. The new task immediately appears in the Pending Tasks section.

### Pending Tasks

Pending tasks are displayed separately from completed tasks.

Each pending task includes:

- Complete toggle
- Task name
- Timestamp
- Edit button
- Delete button

### Completed Tasks

When a user marks a task as complete, it is automatically moved from the Pending Tasks section to the Completed Tasks section.

Completed tasks display:

- Completed status
- Task name with strikethrough styling
- Completion timestamp
- Edit button
- Delete button

### Inline Editing

Clicking the **Edit** button replaces the task text with an editable input field.

The user can:

- Modify the task
- Press Enter to save
- Press Escape to cancel
- Click outside the input to save the change

### Delete

The **Delete** button permanently removes the selected task from the application and from localStorage.

## Task Counters

The application displays separate task counters above each list.

Example:

```text
3 pending
```

and

```text
5 completed
```

These values are automatically updated whenever tasks are added, completed, edited or deleted.

## Timestamps

Each task stores a creation timestamp.

When a task is completed, a completion timestamp is also stored.

Example:

```text
Added Nov 10, 2026, 10:30 AM
```

or:

```text
Completed Nov 10, 2026, 11:15 AM
```

## Local Storage

TaskFlow uses the browser's `localStorage` API to preserve tasks after page refreshes.

Tasks are stored under the following key:

```text
taskFlowTasks
```

The application converts the task array into JSON before storing it and parses the JSON when loading the application.

## Empty States

The application displays friendly messages when there are no tasks.

### Pending

```text
No pending tasks

You're all caught up. Add a new task to get started.
```

### Completed

```text
No completed tasks

Completed tasks will appear here.
```

## Responsive Design

The application is designed to work on:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

On larger screens, the Pending and Completed sections appear side by side.

On smaller screens, the sections automatically switch to a single-column layout.

## How to Run

No installation or backend server is required.

1. Clone or download the repository.
2. Open the `WebDev-L2-ToDoApp` folder.
3. Open `index.html` in a web browser.

You can also use the **Live Server** extension in Visual Studio Code.

## Testing Checklist

Test the following functionality before submission:

- [ ] Add a new task
- [ ] Verify it appears in Pending Tasks
- [ ] Verify the pending counter increases
- [ ] Mark a task as complete
- [ ] Verify it moves to Completed Tasks
- [ ] Verify the completed counter increases
- [ ] Edit a pending task
- [ ] Edit a completed task
- [ ] Delete a pending task
- [ ] Delete a completed task
- [ ] Refresh the browser
- [ ] Verify tasks remain after refresh
- [ ] Check timestamps
- [ ] Check empty-state messages
- [ ] Test the layout on mobile
- [ ] Test the layout on desktop

## Internship Details

**Organization:** Oasis Infobyte  
**Internship:** Web Development and Designing Internship  
**Level:** Level 2  
**Task:** Task 3 – To-Do Web App

## Developer

**Owais**

GitHub:

https://github.com/Owaisraza005

LinkedIn:

https://www.linkedin.com/in/owaisraza005

## Learning Outcomes

Through this project, I practiced:

- DOM manipulation using JavaScript
- Event listeners
- JavaScript arrays and objects
- Creating and modifying DOM elements
- Handling form submissions
- Implementing CRUD-style functionality
- Using browser localStorage
- Working with JSON data
- Managing application state
- Creating responsive layouts with CSS
- Designing user-friendly interfaces
- Implementing inline editing
- Handling empty application states

## License

This project was created for educational and internship purposes as part of the Oasis Infobyte Web Development and Designing Internship.