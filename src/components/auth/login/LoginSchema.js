import * as Yup from 'yup'

const initialValues = { email: '', password: '' }

const LoginValidation = Yup.object({
  email: Yup.string()
    .email()
    .max(255)
    .required(),

  password: Yup.string()
    .max(255)
    .required(),
})

export { initialValues, LoginValidation }
