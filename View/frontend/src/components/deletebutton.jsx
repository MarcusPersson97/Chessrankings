function DeleteButton({ playerId, fetchPlayers }) {

    async function handleDelete() {


        const confirmed = window.confirm(
            "Are you sure you want to delete this player?"
        );

        if (!confirmed) {
            return;
        }

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