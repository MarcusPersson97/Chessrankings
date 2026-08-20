import DeleteButton from "./deletebutton";

function PlayerRow({ player, rank, fetchPlayers }) {
    return (
        <div>
            <span>{rank}</span>
            <span>{player.name}</span>
            <span>{player.country}</span>
            <span>{player.title}</span>
            <span>{player.rating}</span>
            <span>{player.peakRating}</span>
            <span>{player.style}</span>
            <DeleteButton
            playerId={player._id}
            fetchPlayers={fetchPlayers}
            />
        </div>
    );
}

export default PlayerRow;