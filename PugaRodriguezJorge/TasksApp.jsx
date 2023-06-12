import { useState, useEffect } from "react";

export function TasksApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem("tasks"));
    if (taskList) {
      setTasks(taskList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleNewTaskAdd = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleTaskToggle = (index) => {
    const taskList = [...tasks];
    taskList[index].completed = !taskList[index].completed;
    setTasks(taskList);
  };

  return (
    <div className="max-w-md mx-auto mt-4">
      <h1 className="text-xl font-bold mb-4">Lista de tareas</h1>
      <ul className="list-disc pl-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => handleTaskToggle(index)}
            className={`${
              task.completed ? "line-through text-gray-400" : ""
            } cursor-pointer`}
          >
            {task.text}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="border border-solid border-gray-400 py-2 px-3 rounded-lg mr-2 outline-none w-full"
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="Agrega una tarea"
        />
        <button
          onClick={handleNewTaskAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar tarea
        </button>
      </div>
    </div>
  );
}

