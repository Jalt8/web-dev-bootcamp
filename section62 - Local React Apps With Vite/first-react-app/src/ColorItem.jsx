import React, { useState } from 'react';

function ColorItem({ randomColor, colors }) {
    const [color, setColor] = useState(randomColor);

    const changeColor = () => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(newColor);
    }

    return (
        <div 
            onClick={changeColor}
            style={{
                backgroundColor: color,
                width: '100px',
                height: '100px'
            }}
        ></div>
    );
}

export default ColorItem;
