import { useState } from 'react';

function SignUpUserForm() {
    function handleFormSubmit(){
        console.log(firstName, lastName)
        console.log('submitted')
    }
    function updateFirstName(e) {
        setFirstName(e.target.value)
    }
    function updateLastName(e) {
        setLastName(e.target.value)
    }
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="firstname" value={firstName} onChange={updateFirstName} id='firstName' />
            <label htmlFor="lastNameS">Last Name</label>
            <input type="text" placeholder="lastname" value={lastName} onChange={updateLastName} id='lastName' />
            <button onClick={handleFormSubmit}>Submit</button>
        </div>
    );
}

export default SignUpUserForm;