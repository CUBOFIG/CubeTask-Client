import React, { useReducer } from 'react';
import ProjectsContext from './projectsContext'
import ProjectsReducer from './projectsReducer'
import clientAxios from 'config/axios';
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR
} from 'types'

const ProjectState = props => {


  const initialState = {
    projects: [],
    form: false,
    project: null,
    message: null
  }

  const [state, dispatch] = useReducer(ProjectsReducer, initialState)

  const showForm = (form) => {
    dispatch({
      type: FORM_PROJECT,
      payload: form
    })
  }

  const getProjects = async () => {
    try {

      const answer = await clientAxios.get('/api/projects');

      dispatch({
        type: GET_PROJECTS,
        payload: answer.data.projects
      })

    } catch (error) {
      const alert = {
        msg: "Oops, There was an error!",
        category: "error"
      }

      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  }

  const addProject = async project => {
    try {

      const answer = await clientAxios.post('/api/projects', project);

      dispatch({
        type: ADD_PROJECT,
        payload: answer.data
      })

    } catch (error) {
      const alert = {
        msg: "Oops, There was an error!",
        category: "error"
      }

      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  }

  const actualProject = projectId => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId
    })
  }

  const deleteProject = async projectId => {
    try {

      await clientAxios.delete(`/api/projects/${projectId}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: projectId
      })

    } catch (error) {
      const alert = {
        msg: "Oops, There was an error!",
        category: "error"
      }

      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  }

  const value = {
    projects: state.projects,
    form: state.form,
    project: state.project,
    message: state.message,
    showForm,
    getProjects,
    addProject,
    actualProject,
    deleteProject
  }

  return (
    <ProjectsContext.Provider value={value}>
      {props.children}
    </ProjectsContext.Provider>
  )
}

export default ProjectState
