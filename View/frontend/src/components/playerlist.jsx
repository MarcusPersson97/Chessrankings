import { useEffect, useState } from "react";
import PlayerRow from "./playerrow";

function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchPlayers() {
            const response = await fetch("http://localhost:3000/api/players");
            const data = await response.json();

            setPlayers(data);
        }

        fetchPlayers();
    }, []);

    return (
        <div>
            <h2>Chess Rankings</h2>

            {players.map((player, index) => (
                <PlayerRow
                    key={player._id}
                    player={player}
                    rank={index + 1}
                />
            ))}
        </div>
    );
}

export default PlayerList;