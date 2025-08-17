import MatchesCard from "../../components/others/MatchesCard.jsx"
import getLiveMatches from "../../controllers/HomeController.js"
import { useState, useEffect } from "react"
import './Homepage.css'


export default function Homepage() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLiveMatches()
            setMatches(data)
        }
        fetchData()
    }, []) // empty 

    return (
        <div className='home'>

            <div class="box1">
                <h2>Live & Upcoming Matches</h2>
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