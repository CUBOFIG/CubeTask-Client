import * as Yup from 'yup'

const initialValues = { name: '' }

const FormTaskSchema = Yup.object({
  name: Yup.string().required("The task's name is required")
})

export { initialValues, FormTaskSchema }
