import { useState } from "react";

export default function ProfileSearchForm({ search }) {
    const [term, setTerm] = useState('')

    function handleChange(evt) {
        setTerm(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        search(term)
        setTerm('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="term">Search for a profile</label>
            <input type="text" placeholder="search" value={term} onChange={handleChange} id='term' name='term' />
            <button>Search</button>
        </form>
    )
}