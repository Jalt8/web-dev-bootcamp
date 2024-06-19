import { useState } from 'react';

function UsernameForm() {
    function updateUsername(e) {
        setUsername(e.target.value)
    }
    const [username, setUsername] = useState('timmy')
    return (
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" value={username} onChange={updateUsername} id='username' />
            <button>Submit</button>
        </div>
    );
}

export default UsernameForm;