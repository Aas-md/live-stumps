import './SchedulePage.css'
import { useState, useEffect } from 'react'
import getScheduleMatches from '../../controllers/scheduleController.js'
import MatchesCard from '../../components/others/MatchesCard.jsx'

export default function SchedulePage() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        const fetchData =  () => {
            const data =  getScheduleMatches()
            setMatches(data)
        }
        fetchData()
    }, [])

    return (
        <div className='schedule'>

            <div class="box1">
                <h2>Schedule & Upcoming Matches</h2>
                <p>Stay updated with real-time cricket scores</p>
            </div>

            <div className="cards">

                {
                    matches.map((match, idx) => (
                        <MatchesCard key={idx} match={match} />
                    ))
                }

            </div>
        </div>
    )
}