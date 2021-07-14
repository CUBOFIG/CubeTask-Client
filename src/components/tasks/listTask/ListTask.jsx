import React, { useContext } from 'react'
import Task from '../task/Task'
import projectContext from 'container/projectsContext/projectsContext'
import taskContext from 'container/taskContext/taskContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { toast } from 'react-toastify'

const ListTask = () => {
  const { project, deleteProject } = useContext(projectContext)
  const { tasksProject } = useContext(taskContext)

  if (!project) return <h2>Select a project</h2>

  const [Actualproject] = project;

  const onClickDelete = () => {
    deleteProject(Actualproject._id)
    toast("Project removed successfully", { type: 'success', position: "bottom-right", autoClose: 3000, })
  }


  return (
    <>
      <h2>Proyecto: {Actualproject.name}</h2>
      <ul className="listado-tareas">
        {tasksProject.length === 0
          ? (<li className="tarea"><p>No tasks to complete.</p></li>)
          : <TransitionGroup>
            {tasksProject.map((task, index) => (
              <CSSTransition
                key={index}
                timeout={300}
                classNames="tarea"
              >
                <Task
                  task={task}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        }

        <button
          type="button"
          className="btn btn-eliminar"
          onClick={onClickDelete}
        >
          Delete Project &times;
        </button>
      </ul>


    </>
  )
}

export default ListTask
