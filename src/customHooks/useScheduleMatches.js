import { useState, useEffect } from 'react'
import getScheduleMatches from '../controllers/scheduleController.js'

export default function useScheduleMatches() {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {

        const fetchData = () => {
            try {
                setLoading(true)
                const data = getScheduleMatches()
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