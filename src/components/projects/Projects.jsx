import React, { useContext, useEffect } from 'react'
import Sidebar from './layout/sidebar/Sidebar'
import Barra from './layout/bar/Bar'
import FormTask from '../tasks/formTask/FormTask'
import ListTask from '../tasks/listTask/ListTask'
import authContext from 'container/authContext/authContext'

const Projects = () => {

  const { userAuthenticated } = useContext(authContext)

  useEffect(() => {
    userAuthenticated();
    //eslint-disable-next-line
  }, [])

  return (
    <div className="contenedor-app">
      <aside>
        <Sidebar />
      </aside>
      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListTask />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects
