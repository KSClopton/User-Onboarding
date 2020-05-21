import React, {useState, useEffect} from 'react';
// import App from './App.css';
import Form from './Form';
import * as yup from 'yup';
import formSchema from './formSchema';
import axios from 'axios';
import OnboardUsers from './OnboardUsers'

// initial states
const initialUsers = []
const initialFormValues = {name: '', email: '', role: '', civil: '', termsOfService: {Yes: false, No: false}}
const initialFormErrors = {name: '', email: '', password: '', checkbox: false}
const initialDisabled = true;
// set states
function App() {
  
  const [formErrors, setFormErrors] = useState('')
  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState(initialUsers)
  
  
  // event handlers
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
    ...formValues, [name]: value,
  })
}
// const onCheckboxChange = evt => {
//   const { name } = evt.target
//   const { checked } = evt.target
// }

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => {
      debugger
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      // password: formValues.password.trim(),
      termsOfService: formValues.termsOfService
    }
    postNewUser(newUser)
   
  }
  

  return (
    <div className="App">
      <Form errors={formErrors} values={formValues} onInputChange={onInputChange} onSubmit={onSubmit}/>
      <OnboardUsers user={users}/>
    </div>
  );
}

export default App;
