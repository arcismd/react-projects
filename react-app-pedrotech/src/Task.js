export const Task = (props) => {
    return ( <div>
    <h3>{props.taskName}</h3>
    <button onClick={() => props.deleteTask(props.id)}>X</button>
  </div> )
}

