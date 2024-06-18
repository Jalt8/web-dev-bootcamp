import React from 'react';
import PlayerItem from './PlayerItem';

function PlayerList({ players, increment, maxScore }) {
    return (
        <ul>
            {players.map((player, index) => (
                <PlayerItem
                    key={player.id}
                    player={player}
                    index={index}
                    increment={increment}
                    maxScore={maxScore}
                />
            ))}
        </ul>
    );
}

export default PlayerList;
