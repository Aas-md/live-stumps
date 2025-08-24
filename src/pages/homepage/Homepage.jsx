import MatchesCard from "../../components/others/MatchesCard.jsx"
import useLiveMatches from "../../customHooks/useLiveMatches.js";
import './Homepage.css'


export default function Homepage() {

    const { matches, error, loading } = useLiveMatches();
   

    if (loading) return <div className="home">Loading...</div>;
    if (error) return <div className="home error">{error}</div>;

    return (
        <div className='home'>

            <div className="box1">
                <h2>Live & Upcoming Matches</h2>
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