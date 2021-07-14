import React from 'react'
import List from '../../components/List/List'
import NewProject from 'components/projects/components/newProject/NewProject'

const Sidebar = () => {
  return (
    <aside>

      <h1>CUBE<span>TASKS</span></h1>
      <NewProject />
      <div className="proyectos">
        <h2>My Projects</h2>
        <List />
      </div>

    </aside>
  )
}

export default Sidebar
