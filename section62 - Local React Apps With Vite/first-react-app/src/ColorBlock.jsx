import { func } from "prop-types";
import ColorItem from "./ColorItem";
import React, { useState } from 'react';

function ColorBlock({rows, columns, colors}) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const divTotal = rows * columns;
    const colorItems = Array.from({ length: divTotal }, (_, index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return <ColorItem key={`${randomColor}-${index}`} randomColor={randomColor} colors={colors}/>;
    });

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: '10px',
    };

    return (
        <div style={gridStyle}>
            {colorItems}
        </div>
    )
}

export default ColorBlock;