import React, { useContext, useEffect } from 'react'
import authContext from 'container/authContext/authContext';

const Bar = () => {

  const { user, userAuthenticated, logOut } = useContext(authContext)

  useEffect(() => {
    userAuthenticated();
    //eslint-disable-next-line
  }, [])

  return (
    <header className="app-header">
      {user
        ? <p className="nombre-usuario">Hello <span>{user.name}</span></p>
        : null
      }
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => logOut()}
        >
          Logout
        </button>
      </nav>
    </header>
  )
}

export default Bar
