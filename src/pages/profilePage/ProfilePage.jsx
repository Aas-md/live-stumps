
import useProfile from '../../customHooks/useProfile'
import './ProfilePage.css'


export default function ProfilePage() {

    let {player,loading,error} = useProfile()

    if (loading) return <div className="Profile">Loading...</div>;
    if (error) return <div className="Profile">{error}</div>;

    return (
         <div className="Profile">

      {!player ? (
        <p>Some thing went wrong please try again after some time</p>
      ) : (<>
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

        </div> </>)}

    </div>
    )
}