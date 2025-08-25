
import mapCurrentMathces from "./mappers/homeMapper.js";
import { mapScore } from "./mappers/scoreMapper.js";
import { mapPlayerProfileObj } from "./mappers/playerMapper.js";
import { filterUpcommingMatches } from "./utils/upcomingMatchesUtil.js";
import mapupcomingMathces from "./mappers/scheduleMapper.js";
import { filterCompletedMatches } from "./utils/completedMatchesUtils.js";
import mapCompletedmatches from "./mappers/completedMapper.js";
import { filterRecentMatches } from "./utils/liveMatchesUtils.js";

// const API_KEY = '92155edc-b3f5-4aa7-a479-b1926bb976ed'//7071
// const API_KEY = 'ef25db60-2ba9-4013-9baa-379a453f48ec'//98972

const apiKeys = [
    "ef25db60-2ba9-4013-9baa-379a453f48ec",
    "92155edc-b3f5-4aa7-a479-b1926bb976ed",
];

function getApiKey() {
    const randomIndex = Math.floor(Math.random() * apiKeys.length);
    return apiKeys[randomIndex];
}

const API_KEY = getApiKey()
console.log(API_KEY)



export async function fetchLiveMatches() {

    try {

        const API_URL = "https://api.cricapi.com/v1/currentMatches"
        let url = `${API_URL}?apikey=${API_KEY}&offset=0`

        const response = await fetch(url);

        const data = await response.json();
        let matches = mapCurrentMathces(data.data);
        return matches

    } catch (err) {
        console.log(err, 'Excetion in FetchLiveMatches')
    }

}


export async function fetchScore(match_id) {

    try {
        const API_URL = "https://api.cricapi.com/v1/match_scorecard"

        let url = `${API_URL}?apikey=${API_KEY}&offset=0&id=${match_id}`
        const response = await fetch(url)


        const data = await response.json()



        let score = mapScore(data.data)

        return score;

    } catch (err) {
        console.log('error -> ', err)
    }

}


export async function fetchPlayerInfo(player_id) {

    try {
        let BASE_URL = 'https://api.cricapi.com/v1/players_info'
        let URL = `${BASE_URL}?apikey=${API_KEY}&offset=0&id=${player_id}`

        let response = await fetch(URL)


        let data = await response.json()


        let playerInfo = mapPlayerProfileObj(data.data)


        return playerInfo;

    } catch (err) {
        console.log("error->", err)
    }
}

export async function fetchUpcoming() {
    try {

        const API_URL = "https://api.cricapi.com/v1/cricScore"
        let url = `${API_URL}?apikey=${API_KEY}`

        const response = await fetch(url);

        const jsonResponse = await response.json();


        let matches = filterUpcommingMatches(jsonResponse.data);
        matches = mapupcomingMathces(matches)

        return matches

    } catch (err) {
        console.log(err, 'Excetion in FetchLiveMatches')
    }
}

export async function fetchCompleted() {
    try {

        const API_URL = "https://api.cricapi.com/v1/cricScore"
        let url = `${API_URL}?apikey=${API_KEY}`

        const response = await fetch(url);

        const jsonResponse = await response.json();

        let matches = filterCompletedMatches(jsonResponse.data);

        matches = mapCompletedmatches(matches)

        return matches

    } catch (err) {
        console.log(err, 'Excetion in FetchLiveMatches')
    }
}





//3fef81b0-c1e9-45eb-954f-519f3b33d640 : player id