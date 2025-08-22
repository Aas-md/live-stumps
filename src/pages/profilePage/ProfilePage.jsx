import { useParams } from "react-router-dom";
import logo from "../../assets/react.svg";
import './ProfilePage.css'
import getPlayerInfo from "../../controllers/playerCotroller.js";
import { useEffect, useState } from "react";

export default function ProfilePage() {
const { id } = useParams();
    let [player,setPlayer] = useState({key : 'default obj'})

    let fetchPlayerIfo = async ()=>{
       let data = await getPlayerInfo()
        setPlayer(data)
    }

    useEffect(()=>{
        fetchPlayerIfo()
    },[])

    return (
         <div className="Profile">

     
        <div className="profile-container">
            <img src={player?.playerImg} alt="img" height="40px" width="40px"/>
            <h6 id="name">{player?.name}</h6>
            <span id="country">{player.country}</span>
        </div>

        <div className="personal-info-container">
            <div className="born info">
                <span>Born</span>
                <span>{player.dateOfBirth}</span>
            </div>

            <div className="country info">
                <span>Country</span>
                <span>{player.country}</span>
            </div>

            <div className="role info">
                <span>Role</span>
                <span>{player.role}</span>
            </div>

            <div className="bat-style info">
                <span>Batting Style</span>
                <span>{player.battingStyle}</span>
            </div>

            <div className="bowl-style info">
                <span>Bowling Style</span>
                <span>{player.bowlingStyle}</span>
            </div>

        </div>

    </div>
    )
}