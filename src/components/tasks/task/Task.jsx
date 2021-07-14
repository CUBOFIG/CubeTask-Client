import projectContext from 'container/projectsContext/projectsContext'
import taskContext from 'container/taskContext/taskContext'
import React, { useContext } from 'react'

const Task = ({ task }) => {
  const { project } = useContext(projectContext)
  const { deleteTask, saveTask, editTask } = useContext(taskContext)
  const { status, name, _id } = task

  const [actualProject] = project;

  const deleteTaskSelect = id => {
    deleteTask(id, actualProject._id)
    // getTasksProject(actualProject.id)
  }

  const changeState = task => {
    task.status = !task.status
    editTask(task)
  }

  const editTaskActual = task => {
    saveTask(task)
  }

  return (
    <li className="tarea sombra">
      <p>{name}</p>
      <div className="estado">
        {status
          ?
          (
            <button
              type="button"
              className="completo"
              onClick={() => changeState(task)}
            >
              Complete
            </button>
          )
          :
          (
            <button
              type="button"
              className="incompleto"
              onClick={() => changeState(task)}
            >
              Incomplete
            </button>
          )

        }
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => editTaskActual(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteTaskSelect(_id)}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default Task
