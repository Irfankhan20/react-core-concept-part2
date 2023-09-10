import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borerRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}