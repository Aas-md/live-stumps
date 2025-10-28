import { useNavigate } from "react-router-dom";
import logo from "../../../assets/react.svg";
import './BatsmanRow.css'
import { FaUser } from "react-icons/fa";
import { useState } from "react";

export default function BowlerRow({ player }) {
    const navigate = useNavigate();
    const [imgError, setImgError] = useState(false);
    let handleClick = () => {
        navigate(`/player/${player?.bowler?.id}`);
    }

    return (
        <tr className="player-row" data-id={player?.bowler?.id} onClick={handleClick}>
            <td>
                <div className="player-info">
                    
                    <div className="player-name">
                        <span>{player?.bowler?.name}</span>

                    </div>
                </div>
            </td>
            <td><b>{player.o}</b></td>
            <td>{player.m}</td>
            <td>{player.r}</td>
            <td><b>{player.w}</b></td>
            <td><b>{player.eco}</b></td>
            <td>{player.wd}</td>
        </tr>
    )
}