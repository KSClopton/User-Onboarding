import React from 'react';
import styled from 'styled-components'

function Form(props) {
    const {values, onInputChange, onSubmit, errors, onCheckboxChange} = props
    return (
        <StyleContainer>
            <BorderDiv>
            <ReactElement>
                <h2>React</h2>
                <img src='./favicon.ico'/>
            </ReactElement>
            <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>OnBoard Form</h2>
                {/* <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsofservice}</div>
                </div> */}
              
            </div>
            <div className='form-group inputs'>
                <h4>General Information</h4>
                <LabelStyle>
                <label>Name
                    <input type='text' name='name' onChange={onInputChange}/>
                </label>
                </LabelStyle>
                <LabelStyle>
                <label>Email
                    <input type='email' name='email' onChange={onInputChange}/>
                </label>
                </LabelStyle>
                <LabelStyle>
                <label>Password
                    <input type='password' name='password' onChange={onInputChange}/>
                </label>
                </LabelStyle>
                <LabelStyle>
                <label>Yes
                    <div>
                        <input type='checkbox' name='yes' checked={values.termsofservice} onChange={onInputChange}/>
                    </div>
                </label>
                </LabelStyle>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </form>
        </BorderDiv>
        </StyleContainer>
    )
}

const StyleContainer = styled.div`
    background: slategrey;
    
    border: solid 2px slategrey;
        
`
const BorderDiv = styled.div`
    margin: 10% 20% 10% 20%;
    display: flex;
    border: solid black 1px;
    box-shadow: 2px 2px 2px 2px;
    
`
const ReactElement = styled.div`
    
    background-color: rgb(100, 220, 290);
    padding: 10%;
    
    img{
        width: 125px;
    }
`
const LabelStyle = styled.div`
    width: 80%;
    margin: auto;

`

export default Form;