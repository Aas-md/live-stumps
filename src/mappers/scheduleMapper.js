
export default function mapupcomingMathces(matches) {

    let matchesObj = [];

    for (let match of matches) {

        let curr = {

            id: match.id,
            matchStarted: false,
            matchEnded: false,
            status: match.status,
            date: match.dateTimeGMT,
            matchType: match.matchType,

            team1: {
                shortName: getTeamShortName(match.t1),
                img: match.t1img,
                score: match.t1s && match.t1s.trim() !== "" ? match.t1s : "0/0 (0.0)",

            },

            team2: {
                shortName: getTeamShortName(match.t2),
                img: match.t2img,
                score: match.t2s && match.t2s.trim() !== "" ? match.t1s : "0/0 (0.0)",
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