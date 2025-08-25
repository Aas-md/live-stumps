import { useParams } from "react-router-dom";
import getPlayerInfo from "../controllers/playerCotroller.js";
import { useEffect, useState,useRef } from "react";

export default function useProfile() {
    const { id } = useParams();
    let [player, setPlayer] = useState({ key: 'default obj' })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const called = useRef(false);

    let fetchPlayerIfo = async () => { 
        try {
            setLoading(true)
            const data = await getPlayerInfo(id)
            setPlayer(data)
        } catch (err) {
            console.error("Failed to fetch Player Info:", err)
            setError("Unable to load PLayer Info right now.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (called.current) return; // prevent double call
        called.current = true;
        fetchPlayerIfo()
    }, [])



    return { player,loading,error }

}