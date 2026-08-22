import { useState } from "react";
import DeleteButton from "./deletebutton";
import EditButton from "./editbutton";

function PlayerRow({ player, rank, fetchPlayers }) {

    const [editing, setEditing] = useState(false);

    const [name, setName] = useState(player.name);
    const [country, setCountry] = useState(player.country);
    const [title, setTitle] = useState(player.title);
    const [rating, setRating] = useState(player.rating);
    const [peakRating, setPeakRating] = useState(player.peakRating);
    const [style, setStyle] = useState(player.style);

    async function handleSave() {
    const response = await fetch(`http://localhost:3000/api/players/${player._id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            country: country,
            title: title,
            rating: rating,
            peakRating: peakRating,
            style: style
        })
    });

    if (response.ok) {
        setEditing(false);
        fetchPlayers();
    }
}

    return (
    <div>
        {editing ? (
            <div>
                <div>
    <input
        value={name}
        onChange={(e) => setName(e.target.value)}
    />

    <input
        value={country}
        onChange={(e) => setCountry(e.target.value)}
    />

    <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
    />

    <input
        value={rating}
        onChange={(e) => setRating(e.target.value)}
    />

    <input
        value={peakRating}
        onChange={(e) => setPeakRating(e.target.value)}
    />

    <input
        value={style}
        onChange={(e) => setStyle(e.target.value)}
    />
    <button onClick={handleSave}>
        Save
    </button>
    </div>
            </div>
        ) : (
            <div>
                <span>{rank}</span>
                <span>{player.name}</span>
                <span>{player.country}</span>
                <span>{player.title}</span>
                <span>{player.rating}</span>
                <span>{player.peakRating}</span>
                <span>{player.style}</span>

                <EditButton
                    onEdit={() => setEditing(true)}
                />

                <DeleteButton
                    playerId={player._id}
                    fetchPlayers={fetchPlayers}
                />
            </div>
        )}
    </div>
);
}

export default PlayerRow;