import React, { Fragment, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues, NewProjectSchema } from './NewProjectSchema'
import projectsContext from "container/projectsContext/projectsContext"
import { toast } from 'react-toastify'

const NewProject = () => {

  const { form, showForm, addProject } = useContext(projectsContext)

  const onSubmit = ({ name }) => {
    showForm(form)
    toast("Successfully created project", { type: 'success', position: "bottom-right", autoClose: 3000, })
    setTimeout(() => {
      addProject({
        name: name
      })
    }, 3000)

  }

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario" onClick={() => showForm(form)}>
        New Project
      </button>
      {form
        ? (
          <Formik initialValues={initialValues} validationSchema={NewProjectSchema} onSubmit={onSubmit}>
            <Form className="formulario-nuevo-proyecto">
              <Field name="name" className="input-text" type="text" placeholder="Project's name" />
              <button type="submit" className="btn btn-block btn-primario">
                Add Project
              </button>
              <ErrorMessage name="name" className="mensaje error" component="p" />
            </Form>
          </Formik>
        )
        : null
      }

    </Fragment >
  )
}

export default NewProject
