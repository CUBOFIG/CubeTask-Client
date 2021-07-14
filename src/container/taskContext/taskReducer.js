import { TASKS_PROJECT, ADD_TASK, DELETE_TASK, ACTUAL_TASK, EDIT_TASK } from 'types'

const TaskReducer = (state, action) => {
  switch (action.type) {

    case TASKS_PROJECT:
      return {
        ...state,
        tasksProject: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        tasksProject: [action.payload, ...state.tasksProject]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.filter(task => task._id !== action.payload)
      }
    case ACTUAL_TASK:
      return {
        ...state,
        taskSelect: action.payload
      }
    case EDIT_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.map(task => task._id === action.payload._id ? action.payload : task),
        taskSelect: null
      }
    default:
      return state;
  }

}

export default TaskReducer;
