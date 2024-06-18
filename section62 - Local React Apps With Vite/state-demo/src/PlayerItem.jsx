import React from 'react';

function PlayerItem({ player, index, increment, maxScore }) {
    return (
        <li>
            Player {index + 1}: {player.score}
            <button onClick={() => increment(player.id)}>+1</button>
            {player.score >= maxScore && <h2>Player {index + 1} Wins!</h2>}
        </li>
    );
}

export default PlayerItem;
