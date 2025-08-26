
import mapCurrentMathces from "./mappers/homeMapper.js";
import { mapScore } from "./mappers/scoreMapper.js";
import { mapPlayerProfileObj } from "./mappers/playerMapper.js";
import { filterUpcommingMatches } from "./utils/upcomingMatchesUtil.js";
import mapupcomingMathces from "./mappers/scheduleMapper.js";
import { filterCompletedMatches } from "./utils/completedMatchesUtils.js";
import mapCompletedmatches from "./mappers/completedMapper.js";
import { filterRecentMatches } from "./utils/liveMatchesUtils.js";


const apiKeys = [
    "ef25db60-2ba9-4013-9baa-379a453f48ec",//98972
    "92155edc-b3f5-4aa7-a479-b1926bb976ed",//7071
    '13b20fa9-6202-4477-8ce0-baa65662d4a8',//hamza
    '13b20fa9-6202-4477-8ce0-baa65662d4a8'//rahat
];

function getApiKey() {
    const randomIndex = Math.floor(Math.random() * apiKeys.length);
    return apiKeys[randomIndex];
}

const API_KEY = getApiKey()




export async function fetchLiveMatches() {

    const API_URL = "https://api.cricapi.com/v1/currentMatches"
    let url = `${API_URL}?apikey=${API_KEY}&offset=0`

    const response = await fetch(url)

    if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`)

    const data = await response.json()

    if (data.status == 'failure')
        throw new Error(data.reason)

    if (!Array.isArray(data.data)) {
        throw new Error("Invalid data format from API");
    }


    let matches = mapCurrentMathces(data.data)
    return matches
}


export async function fetchScore(match_id) {

    const API_URL = "https://api.cricapi.com/v1/match_scorecard"
    let url = `${API_URL}?apikey=${API_KEY}&offset=0&id=${match_id}`

    const response = await fetch(url)

    if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`)

    const data = await response.json()

    if (data.status == 'failure')
        throw new Error(data.reason)


    if (!data || !data.data)
        throw new Error("Invalid data format from API")


    let score = mapScore(data.data)

    return score;
}


export async function fetchPlayerInfo(player_id) {


    let BASE_URL = 'https://api.cricapi.com/v1/players_info'
    let URL = `${BASE_URL}?apikey=${API_KEY}&offset=0&id=${player_id}`

    let response = await fetch(URL)

    if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`)

    let data = await response.json()

    if (data.status == 'failure')
        throw new Error(data.reason)

    if (!data || !data.data)
        throw new Error("Invalid data format from API")

    let playerInfo = mapPlayerProfileObj(data.data)

    return playerInfo;

}

export async function fetchUpcoming() {


    const API_URL = "https://api.cricapi.com/v1/cricScore"
    let url = `${API_URL}?apikey=${API_KEY}`

    const response = await fetch(url)
    if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`)

    const jsonResponse = await response.json()

    if (jsonResponse.status == 'failure')
        throw new Error(jsonResponse.reason)

    if (!jsonResponse || !jsonResponse.data)
        throw new Error("Invalid data format from API")

    let matches = filterUpcommingMatches(jsonResponse.data);
    matches = mapupcomingMathces(matches)

    return matches


}

export async function fetchCompleted() {


    const API_URL = "https://api.cricapi.com/v1/cricScore"
    let url = `${API_URL}?apikey=${API_KEY}`

    const response = await fetch(url);

    if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`)

    const jsonResponse = await response.json()

    if (jsonResponse.status == 'failure')
        throw new Error(jsonResponse.reason)

    if (!jsonResponse || !jsonResponse.data)
        throw new Error("Invalid data format from API")

    let matches = filterCompletedMatches(jsonResponse.data);

    matches = mapCompletedmatches(matches)

    return matches


}





//3fef81b0-c1e9-45eb-954f-519f3b33d640 : player id