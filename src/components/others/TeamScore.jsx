import './TeamScore.css'

export default function TeamScore({ team1, team2 }) {

    return (
        <div className="team-score">

            <div className="team team-one">
                <div className="team-header">
                    <img src={team1?.img} alt="flag" />
                    <h2>{team1?.name}</h2>
                </div>
                <div className="team-stats">
                    <span className="scoreSpan">{team1?.score}</span>
                    <span className="runrateSpan">Run Rate: 5.78</span>
                </div>
            </div>
            <div className="team team-two">
                <div className="team-header">
                    <img src={team2?.img} alt="flag" />
                    <h2>{team2?.name}</h2>
                </div>
                <div className="team-stats">
                    <span className="scoreSpan">{team2?.score}</span>
                    <span className="runrateSpan">Run Rate: 5.55</span>
                </div>
            </div>

            <hr />

            <div className="match-summary">
                <div className="target">
                    <span >Target : </span>
                    <span>290 runs from 50 overs</span>
                </div>
                <div className="target">
                    <span >Required Run Rate : </span>
                    <span>8.34 (last 14.4 overs)</span>
                </div>
            </div>

        </div>
    )
}