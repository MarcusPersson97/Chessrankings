import { useState } from "react";

function PlayerForm({ fetchPlayers }) {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [country, setCountry] = useState("");
    const [title, setTitle] = useState("");
    const [peakRating, setPeakRating] = useState("");
    const [style, setStyle] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const newPlayer = {
            name,
            rating: Number(rating),
            country,
            title,
            peakRating: Number(peakRating),
            style
        }
        
        const response = await fetch("http://localhost:3000/api/players",{

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newPlayer)
            

        });

        
        if(response.ok){
           await fetchPlayers();

            setName("");
            setRating("");
            setCountry("");
            setTitle("");
            setPeakRating("");
            setStyle("");
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label>Rating:</label>
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>

            <div>
                <label>Country:</label>
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>

            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div>
                <label>Peakrating:</label>
                <input
                    type="number"
                    value={peakRating}
                    onChange={(e) => setPeakRating(e.target.value)}
                />
            </div>

            <div>
                <label>Style:</label>
                <input
                    type="text"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                />
            </div>

            <button type="submit">
                Add Player
            </button>
        </form>
    );
}

export default PlayerForm;