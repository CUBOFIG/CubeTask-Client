import * as Yup from 'yup'

const initialValues = { name: '' }

const NewProjectSchema = Yup.object({
  name: Yup.string().required("The name is required")
})


export { initialValues, NewProjectSchema }
