import './MatchesCard.css'

export default function MatchesCard({ match }) {


    return (
        <div className='card'>

            <div className="box">

                <div className="team">
                    <img src={match.team1.img} height="16px" width="24px" alt="icon" />
                    <span>{match.team1.shortName}</span>
                </div>
                <div className="score">
                    <span>{match.team1.score}</span>
                </div>
            </div>

            <div className="box">
                <div class="team">
                    <img src={match.team2.img} height="16px" width="24px" alt="icon" />
                    <span>{match.team2.shortName}</span>
                </div>
                <div className="score">
                    <span>{match.team2.score}</span>
                </div>
            </div>

            <hr></hr>

            <div className="box">
                <span class="live">Live</span>
                <button>View Score</button>
            </div>


        </div>
    )

}