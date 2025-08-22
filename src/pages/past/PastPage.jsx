
import MatchesCard from "../../components/others/MatchesCard"
import './PastPage.css'
import usePastMatches from "../../customHooks/usePastMatches.js"

export default function PastPage() {

    let { matches, loading, error } = usePastMatches()


    if (loading) return <div className="home">Loading...</div>;
    if (error) return <div className="Past error">{error}</div>;

    return (
        <div className='past'>

            <div className="box1">
                <h2>Past & Completed Matches</h2>
                <p>Stay updated with real-time cricket scores</p>
            </div>

            <div className="cards">

                {
                    Array.isArray(matches) && matches.length > 0 ? (
                        matches.map((match, idx) => (
                            <MatchesCard key={idx} match={match} />
                        ))) : (
                        <p>No matches available at the moment.</p>
                    )
                }

            </div>
        </div>
    )
}