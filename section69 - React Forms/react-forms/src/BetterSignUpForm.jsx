import { useState } from 'react';

function BetterSignUpUserForm() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', password: ''})
    function handleChange(evt){
        const changedField = evt.target.name
        const newValue = evt.target.value
        setFormData({
            ...formData,
            [changedField]: newValue
        })
    }
    function handleFormSubmit(){
        console.log(formData)
        console.log('submitted')
    }
    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="firstname" value={formData.firstName} onChange={handleChange} id='firstName' name='firstName' />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="lastname" value={formData.lastName} onChange={handleChange} id='lastName'name='lastName' />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" value={formData.password} onChange={handleChange} id='password'name='password' />
            <button onClick={handleFormSubmit}>Submit</button>
        </div>
    );
}

export default BetterSignUpUserForm;