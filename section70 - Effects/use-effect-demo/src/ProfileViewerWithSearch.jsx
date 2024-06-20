import { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileSearchForm from './ProfileSearchForm';

export default function ProfileViewerWithSearch() {
    const [username, setUsername] = useState('colt');
    const [profile, setProfile] = useState({ data: null, isLoading: true });

    useEffect(() => {
        async function fetchProfile() {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setProfile({ data: response.data, isLoading: false });
        }
        fetchProfile();
    }, [username]);

    function search(username){
        setProfile({ data: null, isLoading: true });
        setUsername(username);
    }

    if(profile.isLoading){
        return <p>Loading...</p>
    }

    return (
        <div>
            <ProfileSearchForm search={search} />
            <h1>{profile.data.login}</h1>
            <img src={profile.data.avatar_url} alt={profile.data.login} />
        </div>
    )

}