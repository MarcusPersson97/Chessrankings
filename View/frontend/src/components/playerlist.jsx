import { useEffect, useState } from "react";
import PlayerRow from "./playerrow";

function PlayerList() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

        async function fetchPlayers() {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("http://localhost:3000/api/players");

            if (!response.ok) {
                throw new Error("Failed to fetch players");
            }

            const data = await response.json();

            setPlayers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
    
    fetchPlayers();
    const interval = setInterval(fetchPlayers, 30000);
    return() => clearInterval(interval);

    }, []);

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