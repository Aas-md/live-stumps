import { useEffect, useState } from "react"
import getLiveScore from '../../controllers/scoreController.js'
import MatchInfoCard from "../../components/others/MatchInfoCard.jsx"
import './ScorePage.css'
import TeamScore from "../../components/others/TeamScore.jsx"
import BatsmanTable from "../../components/others/ScoreCard/BatsmanTable.jsx"
import BowlerTable from "../../components/others/ScoreCard/BowlerTable.jsx"
import Button from "../../components/Button.jsx"
import { useParams } from "react-router-dom"

export default function ScorePage() {

    const [score, setScore] = useState({ name: "biran" })
    const [activeTeam, setActiveTeam] = useState('team1')
    const [activeView, setActiveView] = useState("batting");
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { matchId } = useParams()


    let fetchScore = async () => {
        try {
            setLoading(true);
            let data = await getLiveScore();
            setScore(data);
        } catch (err) {
            setError("Failed to load score");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchScore()
    }, [])

    let matchInfo = { name: score.name, venue: score.venue, date: score.date, format: score.matchType, status: score.status }

    if (loading) return <div >Loading...</div>
    if (error) return <div>{error}</div>
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

