import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function FormDemo() {
    const [text, setText] = React.useState('Hello, World!');
    const [volume, setVolume] = React.useState(30);
    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <Box sx={{border: "1px solid red", p: 2}}>
            <h1>{text}</h1>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={text} onChange={handleChange} />
            <h2>{volume}</h2>
            <Slider aria-label="Volume" value={volume} onChange={(event, newValue) => setVolume(newValue)} />
        </Box>
    );
}