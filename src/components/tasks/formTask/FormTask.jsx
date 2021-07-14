import React, { useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import projectContext from 'container/projectsContext/projectsContext'
import taskContext from 'container/taskContext/taskContext'
import { initialValues, FormTaskSchema } from './FormTaskSchema'
import './FormTask.css'

const FormTask = () => {
  const [change, setChange] = useState(null)
  const { project } = useContext(projectContext)
  const { addTask, getTasksProject, taskSelect, editTask } = useContext(taskContext)

  useEffect(() => {
    if (taskSelect !== null) {
      setChange(taskSelect)
    } else {
      setChange(null)
    }
  }, [taskSelect])


  if (!project) return null

  const [actualProject] = project;

  const onsubmit = (values, { resetForm }) => {

    if (taskSelect === null) {
      const task = {
        name: values.name,
        project: actualProject._id
      }
      addTask(task, actualProject._id);
    } else {

      editTask({ created: taskSelect.created, _id: taskSelect._id, name: values.name, status: false, project: actualProject._id })
    }

    getTasksProject(actualProject._id)

    resetForm({})
  }

  return (
    <div className="formulario">
      <Formik
        onSubmit={onsubmit}
        initialValues={change || initialValues}
        validationSchema={FormTaskSchema}
        enableReinitialize
      >
        <Form>
          <div className="contenedor-input">
            <Field
              name="name"
              placeholder="Name of the Task."
              className="input-text"
              type="text"
            />
          </div>
          <div className="contenedor-input">
            <button
              type="submit"
              className="btn btn-primario btn-submit btn-block"
            >
              {taskSelect ? `Edit Task` : `Add Task`}
            </button>
          </div>
          <ErrorMessage name="name" className="error mensaje" component="div" />
        </Form>
      </Formik>
    </div>
  )
}

export default FormTask
