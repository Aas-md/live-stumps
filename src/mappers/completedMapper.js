import { getRandomTeamImage } from "../utils/scoreUtils";

export default function mapCompletedmatches(matches) {

    let matchesObj = [];

    for (let match of matches) {



        let team1Name = getTeamShortName(match.t1)
        let team2Name = getTeamShortName(match.t2)
        let team1Img = getRandomTeamImage(team1Name) == "" ? match.t1img : getRandomTeamImage(team1Name)
        let team2Img = getRandomTeamImage(team2Name) == "" ? match.t2img : getRandomTeamImage(team2Name)

        let curr = {

            id: match.id,
            matchStarted: true,
            matchEnded: true,
            status: match.status,
            date: match.dateTimeGMT,
            matchType: match.matchType,

            team1: {
                shortName: getTeamShortName(match.t1),
                img: team1Img,
                score: match.t1s && match.t1s.trim() !== "" ? match.t1s : "0/0 (0.0)",

            },

            team2: {
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