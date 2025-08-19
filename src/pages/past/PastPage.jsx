import { useState,useEffect } from "react"
import getPastMatches from "../../controllers/pastController.js"
import MatchesCard from "../../components/others/MatchesCard"
import './PastPage.css'

export default function PastPage() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        const fetchData =  () => {
            const data =  getPastMatches()
            setMatches(data)
        }
        fetchData()
    }, []) // empty 

    return (
        <div className='past'>

            <div class="box1">
                <h2>Past & Completed Matches</h2>
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