import './SchedulePage.css'
import useScheduleMatches from '../../customHooks/useScheduleMatches.js'
import MatchesCard from '../../components/others/MatchesCard.jsx'

export default function SchedulePage() {

    const { matches, loading, error } = useScheduleMatches()


    if (loading) return <div className="home">Loading...</div>;
    if (error) return <div className="Schedule error">{error}</div>;

    return (
        <div className='schedule'>

            <div className="box1">
                <h2>Schedule & Upcoming Matches</h2>
                <p>Stay updated with real-time cricket scores</p>
            </div>

            <div className="cards">

                {
                    (Array.isArray(matches) && matches.length > 0 ? ((
                        matches.map((match, idx) => (
                            <MatchesCard key={idx} match={match} />
                        )))) : (<p>No matches available at the moment.</p>))

                }

            </div>
        </div>
    )
}