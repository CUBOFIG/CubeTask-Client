import * as Yup from 'yup'

const initialValues = { name: '', email: '', password: '', repassword: '' }

const NewUserValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .max(255)
    .required(),

  password: Yup.string()
    .min(8)
    .max(255)
    .required(),

  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2)
    .max(255)
    .required(),

  repassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8)
    .max(255)
    .required()
})


export { initialValues, NewUserValidation }
