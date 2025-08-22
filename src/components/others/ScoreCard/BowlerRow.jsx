import { useNavigate } from "react-router-dom";
import logo from "../../../assets/react.svg";
import './BatsmanRow.css'

export default function BowlerRow({player}) {
       const navigate = useNavigate();

    let handleClick = () => {
        navigate(`/player/${player?.bowler?.id}`);
    }

    return (
        <tr className="player-row" data-id={player?.bowler?.id} onClick={handleClick}>
            <td>
                <div className="player-info">
                    <div><img src={logo} alt="img" height="24" width="24" />

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