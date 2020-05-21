import React, {useState, useEffect} from 'react';
// import App from './App.css';
import Form from './Form';
import * as yup from 'yup';
import formSchema from './formSchema';
import axios from 'axios';
import OnboardUsers from './OnboardUsers';
import styled from 'styled-components';

// initial states
const initialUsers = []
const initialFormValues = {name: '', email: '', password: '', termsOfService: {Yes: false, No: false}}
const initialFormErrors = {name: '', email: '', password: '', checkbox: false}
const initialDisabled = true;
const initialErrors = {name:'', email:'', password:'', accept:''};
// set states
function App() {
  
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState([])
  const [disabled, setDisabled] = useState(initialDisabled)
  
  
  // event handlers
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    

    if (event.target.checkbox === false)
    setDisabled(true)
    else{
      setDisabled(false)
    }
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
  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
    .then(res => {
      setUsers(res.data.data)
      
    })
    .catch(err => {
      
    })
  }
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
      // termsOfService: formValues.termsOfService
    }
    
    postNewUser(newUser)
   
  }
  useEffect(()=> {
    getUsers()
  }, [])
  
  // useEffect(() => {
  //   formSchema.isValid(formValues)
  //   .then(valid => {
  //     setDisabled(!valid)
  //   })
  // }, [formValues])
 
  return (
    
    <BodyContainer>
      <Heading>
        <h2>LoopedIn</h2>
        <JoinButtons>
          <button>Sign In</button>
          <button>Loop up</button>
        </JoinButtons>
      </Heading>
      <Form errors={formErrors} values={users} onInputChange={onInputChange} onSubmit={onSubmit} disabled={disabled}/>
      {users === [] || users===undefined ? 'loading...' : users.map(user => {{console.log(users)}
        return  <OnboardUsers key={user.email} details={user}/>
      })}
    </BodyContainer>
  );
}

const BodyContainer = styled.div `
 
`
const Heading = styled.div`
   background-color: #B0E0E6;

  display: flex;
  justify-content: space-between;
  align-items: center;

    h2{
      padding-left: 5%;
    }

 
`
const JoinButtons = styled.div`
 
  padding-right: 5%;
  width: 20%;
  display: flex;
  justify-content: space-between;
 
`
export default App;
