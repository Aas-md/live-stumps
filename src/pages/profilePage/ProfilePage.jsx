
import useProfile from '../../customHooks/useProfile'
import './ProfilePage.css'
import { FaUser } from "react-icons/fa";


export default function ProfilePage() {

    let { player, loading, error } = useProfile()

    if (loading) return <div className="Profile">Loading...</div>;
    if (error) return <div className="Profile">{error}</div>;



    return (
        <div className="Profile">

            {!player || !Object.keys(player).length ? (
                <h3>Something went wrong please try again after some time..</h3>
            ) : (
                <>
                    <div className="profile-container">
                        {player?.playerImg ? (
                            <img src={player.playerImg} alt={player?.name || "Player"} height="80" width="80"/>
                        ) : (
                            <div className="no-img"> <FaUser size={65} color="#999" /></div>
                        )}
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

                    </div> </>)}

        </div>
    )
}