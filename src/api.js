
import mapCurrentMathces from "./mappers/homeMapper.js";
import { mapScore } from "./mappers/scoreMapper.js";

const API_KEY = '92155edc-b3f5-4aa7-a479-b1926bb976ed'

export async function fetchLiveMatches() {

    try {

        const API_URL = "https://api.cricapi.com/v1/currentMatches"
        let url = `${API_URL}?apikey=${API_KEY}&offset=0`

        const response = await fetch(url);

        const data = await response.json();
        let matches = mapCurrentMathces(data.data);
        console.log('live matches',matches)
        return matches

    } catch (err) {
       console.log(err, 'Excetion in FetchLiveMatches')
    }

}


export async function fetchScore(match_id = "4355b7d6-a4c3-43ed-8d40-be17be45f598") {

    try {
        const API_URL = "https://api.cricapi.com/v1/match_scorecard"

        let url = `${API_URL}?apikey=${API_KEY}&offset=0&id=${match_id}`
        const response = await fetch(url)

       
        const data = await response.json()
         console.log('score data-> ',data.data)

       
        let score = mapScore(data.data)
        console.log('score -> ',score)
        return score;

    } catch (err) {
       console.log('error -> ',err)
    }

}