import { useEffect, useState } from "react"
import getLiveScore from '../../controllers/scoreController.js'
import MatchInfoCard from "../../components/others/MatchInfoCard.jsx"
import './ScorePage.css'
import TeamScore from "../../components/others/TeamScore.jsx"
import BatsmanTable from "../../components/others/ScoreCard/BatsmanTable.jsx"
import BowlerTable from "../../components/others/ScoreCard/BowlerTable.jsx"
import Button from "../../components/Button.jsx"

export default function ScorePage() {

    const [score, setScore] = useState({ name: "biran" })

    let fetchScore = () => {
        let data = getLiveScore()

        setScore(data)
    }

    useEffect(() => {
        fetchScore()
    }, [])

    let matchInfo = { name: score.name, venue: score.venue, date: score.date, format: score.matchType, status: score.status }


    return (
        <div className="score">
            <MatchInfoCard matchInfo={matchInfo} />
            <TeamScore team1={score.team1} team2={score.team2} />
            <Button name={score.team1.name}/>
            <BatsmanTable batting={score.team1?.batting} />
            <BowlerTable bowling={score.team2?.bowling} />
            <BatsmanTable batting={score.team2?.batting} />
            <BowlerTable bowling={score.team1?.bowling} />

        </div>
    )
}