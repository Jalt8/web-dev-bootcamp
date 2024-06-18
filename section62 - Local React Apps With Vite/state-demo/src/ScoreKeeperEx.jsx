import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PlayerList from './PlayerList';

function ScoreKeeperEx({ numPlayers = 2, maxScore = 10 }) {
    const [players, setPlayers] = useState(Array.from({ length: numPlayers }, () => ({ id: uuid(), score: 0 })));
    console.log(players);
    
    function reset() {
        setPlayers(players.map(player => ({ ...player, score: 0 })));
    }
    
    function increment(id) {
        setPlayers(players.map(player => {
            if (player.id === id) {
                return { ...player, score: player.score + 1 };
            }
            return player;
        }));
    }
    
    return (
        <div>
            <PlayerList players={players} increment={increment} maxScore={maxScore} />
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default ScoreKeeperEx;
