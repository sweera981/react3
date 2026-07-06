import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState(""); 

  const handleTaskData = () => {

    if (tasks.includes(taskData)) {
      return alert("Task already exists");
    }
    if (taskData.trim() !== "") {
      setTasks([...tasks, taskData]);
      setTaskData("")
    } else {
      return alert("Please enter a task");
    }
  };
   const deleteTask=(indexToDelete)=>{
    setTasks(tasks.filter((_,index)=>index!==indexToDelete));
   };
   const updateTask = (indexToUpdate) =>{
   const taskToEdit = tasks[indexToUpdate];
   setTaskData(taskToEdit);
   setTasks(tasks.filter((_,index)=>index!==indexToUpdate));
   };
  return (
    <div className= "text-amber-50 p-8">
      <h1 className=" bg-gray-700 p-7 text-4xl font-bold text-center mb-6">TODO</h1>
      <div className=" flex gap-6 justify-center items-center">
        <input
          type="text"
          placeholder="Enter your task"
          value={taskData}
          onChange={(e) => setTaskData(e.target.value)}
          className="py-2 px-4 rounded-lg border-4 bg-white text-black transition-all  "
        />
        <button onClick={handleTaskData} className="px-6 py-2 text-white bg-black hover:bg-amber-950 rounded-2xl ">Add Task</button>
      </div>
      <div className="max-w-md mx-auto mt-6">
        {tasks.map((task,index) => (
             <ul key={index} className="flex justify-between items-center mb-2">
              <li className="text-black">{task}</li>
              <div className="flex gap-30">
                <button onClick={()=>updateTask(index)}className="px-3 py-1 bg-black hover:bg-amber-950 rounded text-sm">Update</button>
                <button onClick={()=>deleteTask(index)}className="px-3 py-1 bg-black hover:bg-amber-950 rounded text-sm">Delete</button>
              </div>
            </ul>

        ))}
        </div>
        </div>
  );
};
export default Todo;