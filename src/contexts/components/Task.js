
import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPen } from '@fortawesome/free-solid-svg-icons'
const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
        <FontAwesomeIcon style={{color:"#f2f0e9"}} icon={faTrash} />
         
        </button>{" "}{" "}{" "}{" "} 
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <FontAwesomeIcon icon={faPen} style={{color:"#f2f0e9"}} />
        </button>
      </div>
    </li>
  )
}

export default Task