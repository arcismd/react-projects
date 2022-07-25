import './App.css';
import { useState } from 'react'
import { Task } from './Task'


function App() {
  const [todoList, setTodoList] = useState([])
  const [taskName, setTaskName] = useState("")

  const handleChange = (event) => {
    setTaskName(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: taskName
    }

    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }


  return (
    <div className='App'>
      <div className='add-task'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div> 

      <div className='list'>
        {todoList.map( (task) => {
         return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  )
}

export default App;
