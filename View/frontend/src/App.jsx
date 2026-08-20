import { useEffect, useState } from "react";
import PlayerList from "./components/playerlist";
import PlayerForm from "./components/playerform";

function App() {

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

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Fullstack Lab</h1>
            <PlayerList
                players={players}
                loading={loading}
                error={error}
            />
            <PlayerForm fetchPlayers={fetchPlayers} />
        </div>
    );
}

export default App;