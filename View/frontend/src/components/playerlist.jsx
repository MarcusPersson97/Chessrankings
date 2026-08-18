import { useEffect, useState } from "react";
import PlayerRow from "./PlayerRow";

function PlayerList(){

    const [players, setPlayers] = useState([]);

    useEffect(()=>{

        async function fetchPlayers(){
            const response = await fetch("http://localhost:3000/api/players");
            const data = await response.json();

            setPlayers(data);
        }

        fetchPlayers();
    })    





}

export default PlayerList;