import { useEffect, useState } from "react";
import PlayerRow from "./playerrow";

function PlayerList({players, loading, error, fetchPlayers}) {

    const [search, setSearch] = useState("");
    
    const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
    <div>
        <h2>Chess Rankings</h2>

        <input
        type="text"
        placeholder="Search players..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        {loading && <p>Loading players...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
            filteredPlayers.map((player, index) => (
                <PlayerRow
                    key={player._id}
                    player={player}
                    rank={index + 1}
                    fetchPlayers={fetchPlayers}
                />
            ))
        )}
    </div>
);
}

export default PlayerList;