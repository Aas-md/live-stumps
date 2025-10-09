import { getRandomTeamImage } from "../utils/scoreUtils.js";
import { getOrderedTeams } from "../utils/teamNameUtils.js";


export default function mapCurrentMathces(matches) {

  if(!matches || !matches.length)return []

  let matchesObj = [];

  for (let match of matches) {

    let score1 = `${match.score?.[0]?.r ?? '0'}/${match.score?.[0]?.w ?? '0'} (${match.score?.[0]?.o ?? '0'})`;
    let score2 = `${match.score?.[1]?.r ?? '0'}/${match.score?.[1]?.w ?? '0'} (${match.score?.[1]?.o ?? '0'})`;
    let teams = getOrderedTeams(match?.score?.[0], match?.teamInfo)
    let team1Name = teams[0]?.shortName === 'N/A' ? teams?.[0]?.name : teams[0]?.shortName
    let team2Name = teams[1]?.shortName === 'N/A' ? teams?.[1]?.name : teams[1]?.shortName

    let curr = {

      id: match.id,
      matchStarted: match?.matchStarted,
      matchEnded: match?.matchEnded,
      status: match.status,
      date: match.dateTimeGMT,
      matchType: match.matchType,

      team1: {
        shortName: team1Name,
        img: getRandomTeamImage(teams[0]?.name) == "" ? teams[0]?.img : getRandomTeamImage(teams[0]?.name),
        score: score1,
        name : teams[0]?.name
      },

      team2: {
        shortName: team2Name,
        img: getRandomTeamImage(teams[1]?.name) == "" ? teams[1]?.img :  getRandomTeamImage(teams[1]?.name),
        score: score2,
        name : teams[1]?.name
      },

    }

    matchesObj.push(curr)

  }

  return matchesObj;

}


