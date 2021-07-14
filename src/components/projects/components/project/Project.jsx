import React, { useContext } from 'react'
import projectContext from 'container/projectsContext/projectsContext'
import taskContext from 'container/taskContext/taskContext'

const Project = ({ project }) => {
  const { actualProject } = useContext(projectContext)
  const { getTasksProject } = useContext(taskContext)

  const selectProject = id => {
    actualProject(id)
    getTasksProject(id)
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => { selectProject(project._id) }}
      >
        {project.name}
      </button>
    </li>
  )
}

export default Project
