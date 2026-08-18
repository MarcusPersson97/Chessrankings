function PlayerRow({ player, rank }) {
    return (
        <div>
            <span>{rank}</span>
            <span>{player.name}</span>
            <span>{player.country}</span>
            <span>{player.title}</span>
            <span>{player.rating}</span>
            <span>{player.peakRating}</span>
            <span>{player.style}</span>
        </div>
    );
}

export default PlayerRow;