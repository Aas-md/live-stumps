import { getRandomTeamImage } from "../utils/scoreUtils";

export default function mapCompletedmatches(matches) {

    if(!matches || !matches.length)return []

    let matchesObj = [];

    for (let match of matches) {
     
        let team1Img = getRandomTeamImage(match.t1) || match.t1img;
        let team2Img = getRandomTeamImage(match.t2) || match.t2img;

        let curr = {

            id: match.id,
            name: match.series,
            matchStarted: true,
            matchEnded: true,
            status: match.status,
            date: match.dateTimeGMT,
            matchType: match.matchType,

            team1: {
                name : match.t1,
                shortName: getTeamShortName(match.t1),
                img: team1Img,
                score: match.t1s && match.t1s.trim() !== "" ? match.t1s : "0/0 (0.0)",

            },

            team2: {
                name : match.t1,
                shortName: getTeamShortName(match.t2),
                img:team2Img,
                score: match.t2s && match.t2s.trim() !== "" ? match.t2s : "0/0 (0.0)",
            },

        }

        matchesObj.push(curr)

    }

    return matchesObj;

}


function getTeamShortName(teamStr) {
    if (!teamStr) return ""; // handle null/undefined

    const match = teamStr.match(/\[(.*?)\]/);
    return match ? match[1] : teamStr.trim();
}