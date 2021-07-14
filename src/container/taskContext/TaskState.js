import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import { TASKS_PROJECT, ADD_TASK, DELETE_TASK, ACTUAL_TASK, EDIT_TASK } from 'types'
import clientAxios from 'config/axios'

const TaskState = props => {

  const initialState = {
    tasksProject: [],
    taskSelect: null
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const getTasksProject = async project => {

    try {
      const answer = await clientAxios.get('/api/tasks', { params: { project } });
      dispatch({
        type: TASKS_PROJECT,
        payload: answer.data
      })
    } catch (error) {
      // console.log(error)
    }
  }

  const addTask = async (task, id) => {

    try {
      await clientAxios.post('/api/tasks', task)

      dispatch({
        type: ADD_TASK,
        payload: task
      })

      getTasksProject(id);

    } catch (error) {
      // console.log(error)
    }
  }

  const deleteTask = async (id, project) => {
    try {

      await clientAxios.delete(`/api/tasks/${id}`, { params: { project } })

      dispatch({
        type: DELETE_TASK,
        payload: id
      })

    } catch (error) {
      // console.log(error)
    }
  }

  const saveTask = task => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task
    })
  }

  const editTask = async task => {
    try {

      const answer = await clientAxios.put(`/api/tasks/${task._id}`, task)

      dispatch({
        type: EDIT_TASK,
        payload: answer.data.task
      })

    } catch (error) {
      // console.log(error)
    }
  }

  const value = {
    tasksProject: state.tasksProject,
    taskSelect: state.taskSelect,
    addTask,
    deleteTask,
    saveTask,
    getTasksProject,
    editTask
  }

  return (
    <TaskContext.Provider value={value}>
      {props.children}
    </TaskContext.Provider>
  )

}

export default TaskState;
