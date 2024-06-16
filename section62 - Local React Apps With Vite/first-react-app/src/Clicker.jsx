import React from 'react';

export default function Clicker({ message, buttonText }) {
    const handleClick = (message) => {
        alert(message);
    };

    const handleHover = () => {
        alert("Mouse Hovered");
    };

    return (
        <div>
            <button onClick={() => handleClick(message)}>
                {buttonText}
            </button>
        </div>
    );
}
