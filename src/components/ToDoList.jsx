import React, { useState } from "react";

import "../css/ToDoList.css"

// Exercício 3 - ToDo List

function ToDoList() {

    const [tasks, setTasks] = useState([])

    const [newTask, setNewTask] = useState('')

    function addTask() {
        if (newTask.trim() === '') {
            return
        }

        const newTaskList = [
            ...tasks,
            { id: Date.now(), text: newTask, completed: false }
        ]

        setTasks(newTaskList)
        setNewTask('')
    }

    function completeTask(id) {
        const updatedTasks = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)

        setTasks(updatedTasks)
    }

    function removeTask(id) {
        const filteredTasks = tasks.filter((task) => task.id !== id)

        setTasks(filteredTasks)
    }

    return (
        <>
            <section id="ex03">
                <div id="inputContainer">
                    <p>Lista de tarefas</p>

                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Adicione uma tarefa"
                    />
                    <button id="addTaskButton" onClick={addTask}>Adicionar tarefa</button>
                </div>

                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <span onClick={() => completeTask(task.id)} style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>

                            <button id="removeTaskButton" onClick={() => removeTask(task.id)} style={{ marginLeft: '10px' }}>
                                Apagar
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

        </>
    )
}

export default ToDoList