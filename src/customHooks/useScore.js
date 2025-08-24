import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import getLiveScore from '../controllers/scoreController.js'

export default function useScore() {
    const [score, setScore] = useState({ name: "biran" })
    const [activeTeam, setActiveTeam] = useState('team1')
    const [activeView, setActiveView] = useState("batting");
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const called = useRef(false);

    const { matchId } = useParams()


    let fetchScore = async () => {
        try {
            setLoading(true);
            let data = await getLiveScore();
            setScore(data);
        } catch (err) {
            console.error("Failed to score :", err)
            setError("Failed to load score");
        } finally {
            setLoading(false);
        }
    }

    useEffect( () => {
        if (called.current) return; // prevent double call
        called.current = true;
        let temp = async()=> {
            await fetchScore()
        } 
        temp()
    }, [])

    return { score, activeTeam, activeView, loading, error, setScore, setActiveTeam, setActiveView, setLoading, setError }
}