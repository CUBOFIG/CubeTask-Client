import React, { useContext, useEffect } from 'react'
import Project from '../project/Project'
import projectsContext from "container/projectsContext/projectsContext"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { toast } from 'react-toastify'

const List = () => {

  const { projects, getProjects, message } = useContext(projectsContext)

  useEffect(() => {
    if (message) {
      toast(message.msg, { type: message.category, position: "bottom-right", autoClose: 4000, })
    }
    getProjects()
    //eslint-disable-next-line
  }, [message]);

  if (projects.length === 0) return <p className="mensaje_spinner">Oops, no projects.</p>

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>

        {projects.map((e) => (
          <CSSTransition
            key={e._id}
            timeout={300}
            classNames="proyecto"
          >
            <Project project={e} />
          </CSSTransition>
        ))}
      </TransitionGroup>

    </ul>
  )
}

export default List
