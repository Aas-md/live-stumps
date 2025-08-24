import getLiveMatches from "../controllers/HomeController.js"
import { useState, useEffect, useRef } from "react"

export default function useLiveMatches() {
    const [matches, setMatches] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const called = useRef(false);
    useEffect( () => {
        if (called.current) return; // prevent double call
        called.current = true;
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await getLiveMatches()
                setMatches(data)
            } catch (err) {
                console.error("Failed to fetch matches:", err)
                setError("Unable to load matches right now.")
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, [])

    return { matches, error, loading };

}