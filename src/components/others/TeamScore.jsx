import './TeamScore.css'

export default function TeamScore({ team1, team2 }) {

    return (
        <div className="team-score">

            <div className="team team-one">
                <div className="team-header">
                    <img src={team1?.img} alt="flag" />
                    <h2>{team1?.name || "Name not available"}</h2>
                </div>
                <div className="team-stats">
                    <span className="scoreSpan">{team1?.score}</span>
                    <span className="runrateSpan">Run Rate: {team1?.runRate}</span>
                </div>
            </div>
            <div className="team team-two">
                <div className="team-header">
                    <img src={team2?.img} />
                    <h2>{team2?.name || "Name not available"}</h2>
                </div>
                <div className="team-stats">
                    <span className="scoreSpan">{team2?.score}</span>
                    <span className="runrateSpan">Run Rate: {team2?.runRate}</span>
                </div>
            </div>

            <hr />

            <div className="match-summary">
                <div className="target">
                    <span >Target : </span>
                    <span>{team2?.target}</span>
                </div>
                <div className="target">
                    <span >Required Rate : </span>
                    <span>{team2?.requiredRate}</span>
                </div>
            </div>

        </div>
    )
}