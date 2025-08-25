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
                    <div>
                        {player?.img && !imgError ? (
                            <img src={player.img} alt={player?.name || "Player"} height="24" width="24"
                                onError={() => setImgError(true)} />
                        ) : (
                            <div className="no-img-scorepage"> <FaUser size={20} color="#999" /></div>
                        )}

                    </div>
                    <div className="player-name">
                        <span>{player?.bowler?.name}</span>

                    </div>
                </div>
            </td>
            <td>{player.o}</td>
            <td>{player.m}</td>
            <td>{player.r}</td>
            <td>{player.w}</td>
            <td>{player.eco}</td>
            <td>{player.wd}</td>
        </tr>
    )
}