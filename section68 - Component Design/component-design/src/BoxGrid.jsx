import { useState } from 'react';
import Box from './Box';

function BoxGrid({ numBoxes = 9 }) {
    const [boxes, setBoxes] = useState(Array.from({ length: numBoxes }, () => ({ isActive: false })));

    function handleClick(i) {
        setBoxes(boxes.map((box, index) => {
            if (index === i) {
                return { ...box, isActive: !box.isActive };
            }
            return box;
        }));
    }

    function reset() {
        setBoxes(boxes.map(box => ({ ...box, isActive: false })));
    }

    return (
        <div>
            {boxes.map((box, i) => (
                <Box key={i} box={box} handleClick={() => handleClick(i)} id={i} />
            ))}
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default BoxGrid;
