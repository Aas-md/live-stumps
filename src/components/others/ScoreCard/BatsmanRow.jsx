import logo from "../../../assets/react.svg";
import './BatsmanRow.css'
import { useNavigate } from "react-router-dom";



export default function BatsmanRow({ player }) {

    const navigate = useNavigate();

    let handleClick = () => {
        navigate(`/player/${player?.batsman?.id}`);
    }

    return (
        <tr className="player-row" data-id={player?.id} onClick={handleClick} >
            <td>
                <div className="player-info">
                    <div><img src={logo} alt="img" height="24" width="24"
                    />
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