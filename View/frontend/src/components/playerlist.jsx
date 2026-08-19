import { useEffect, useState } from "react";
import PlayerRow from "./playerrow";

function PlayerList({players, loading, error}) {
    
    return (
    <div>
        <h2>Chess Rankings</h2>

        {loading && <p>Loading players...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
            players.map((player, index) => (
                <PlayerRow
                    key={player._id}
                    player={player}
                    rank={index + 1}
                />
            ))
        )}
    </div>
);
}

export default PlayerList;