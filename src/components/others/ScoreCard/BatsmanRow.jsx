import { FaUser } from "react-icons/fa";
import logo from "../../../assets/react.svg";
import './BatsmanRow.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";




export default function BatsmanRow({ player }) {

    const navigate = useNavigate();
     const [imgError, setImgError] = useState(false);

    let handleClick = () => {
        navigate(`/player/${player?.batsman?.id}`);
    }

    return (
        <tr className="player-row" data-id={player?.id} onClick={handleClick} >
            <td>
                <div className="player-info">
                    <div>
                        
                        {player?.img  && !imgError ?  (
                            <img src={player.img} alt={player?.name || "Player"} height="24" width="24" 
                               onError={()=>  setImgError(true)} />
                        ) : (
                            <div className="no-img-scorepage"> <FaUser size={20} color="#999" /></div>
                        )}
                    </div>
                    <div className="player-name">
                        <span>{player?.batsman?.name}</span>
                        <span>{player?.dismissalText}</span>
                    </div>
                </div>
            </td>
            <td>{player.r}</td>
            <td>{player.b}</td>
            <td>{player['4s']}</td>
            <td>{player['6s']}</td>
            <td>{player.sr}</td>
            <td>{player.dismissalText}</td>
        </tr>
    )
}