import { useParams } from "react-router-dom";
import logo from "../../assets/react.svg";
import './ProfilePage.css'

export default function ProfilePage() {

    const { id } = useParams();

    return (
         <div className="Profile">

     
        <div className="profile-container">
            <img src={logo} alt="img" height="40px" width="40px"/>
            <h6 id="name">Shaheen Afridi</h6>
            <span id="country">Pakistan</span>
        </div>

        <div className="personal-info-container">
            <div class="born info">
                <span>Born</span>
                <span>Aprill 06,2000 (25 years)</span>
            </div>

            <div className="country info">
                <span>Country</span>
                <span>Pakistan</span>
            </div>

            <div className="role info">
                <span>Role</span>
                <span>Bowler</span>
            </div>

            <div className="bat-style info">
                <span>Batting Style</span>
                <span>Left Handed Bat</span>
            </div>

            <div className="bowl-style info">
                <span>Bowling Style</span>
                <span>Left arm fast medium</span>
            </div>

        </div>

    </div>
    )
}