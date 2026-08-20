function DeleteButton({ playerId, fetchPlayers }) {

    async function handleDelete() {
        const response = await fetch(`http://localhost:3000/api/players/${playerId}`, {
            method: "DELETE"
        });
        if(response.ok){
            fetchPlayers();
        }
    }

    return (
        <button onClick={handleDelete}>
            Delete
        </button>
    );
}

export default DeleteButton;