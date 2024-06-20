import Rating from '@mui/material/Rating';
import React from 'react'

export default function RatingDemo() {
    const [value, setValue] = React.useState(2);
    return (
        <div>
            <h1>Rating Demo Score: {value}</h1>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    )
}
