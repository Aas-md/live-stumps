import { useState, useEffect, useRef } from 'react'
import getScheduleMatches from '../controllers/scheduleController.js'

export default function useScheduleMatches() {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const called = useRef(false);

    useEffect(() => {
        if (called.current) return; // prevent double call
        called.current = true;

        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await getScheduleMatches()
                setMatches(data)
            }
            catch (err) {
                console.error("Failed to fetch matches:", err)
                setError("Unable to load matches right now.")
            } finally {
                setLoading(false)
            }
        }
        fetchData()

    }, [])

    return { matches, error, loading };
}