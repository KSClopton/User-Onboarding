import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(1, 'Name must be at least 1 character long')
    .required('Name is required'),
    email: yup
    .string()
    .email('Not a valid email address')
    .required('Email is required'),
    password: yup
    .string()
    .min(8, 'Your password is not long enough')
    .required('Password is required')
})
export default formSchema;