
import MatchInfoCard from "../../components/others/MatchInfoCard.jsx"
import './ScorePage.css'
import TeamScore from "../../components/others/TeamScore.jsx"
import BatsmanTable from "../../components/others/ScoreCard/BatsmanTable.jsx"
import BowlerTable from "../../components/others/ScoreCard/BowlerTable.jsx"
import Button from "../../components/Button.jsx"
import useScore from "../../customHooks/useScore.js"


export default function ScorePage() {

    let {score,activeTeam,activeView,loading,error,setActiveTeam,setActiveView} = useScore()

    if (loading) return <div className="score-page">Loading...</div>
    if (error) return <div className="score-page">{error}</div>
 
        if(!score)return <p  className="score-page">Some thing went wrong please try again after some time</p>//null case or undefine case
      let matchInfo = { name: score.name, venue: score.venue, date: score.date, format: score.matchType, status: score.status }

    return (
        <div className="score-page">
            <MatchInfoCard matchInfo={matchInfo} />
            <TeamScore team1={score.team1} team2={score.team2} />
            <div className="teams-tab">
                <Button name={score.team1?.name} isActive={activeTeam == 'team1' ? 'active' : 'disable'}
                    onClick={() => setActiveTeam('team1')}
                />
                <Button name={score.team2?.name} isActive={activeTeam == 'team2' ? 'active' : 'disable'}
                    onClick={() => setActiveTeam('team2')} />

            </div>

            <hr />
            <div className="view-tab">

                <Button name="Batting" isActive={activeView == 'batting' ? 'active' : 'disable'}
                    onClick={() => setActiveView('batting')}
                />
                <Button name="Bowling" isActive={activeView == 'bowling' ? 'active' : 'disable'}
                    onClick={() => setActiveView('bowling')} />

            </div>

            {activeView === "batting" ? (
                <BatsmanTable batting={score[activeTeam]?.batting} />
            ) : (
                <BowlerTable bowling={score[activeTeam == 'team1' ? 'team2' : 'team1']?.bowling} />
            )}


        </div>
    )
}

