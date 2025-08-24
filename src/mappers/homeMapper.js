import { getOrderedTeams } from "../utils/teamNameUtils.js";


export default function mapCurrentMathces(matches) {

  let matchesObj = [];

  for (let match of matches) {

    let score1 = `${match.score?.[0]?.r ?? '0'}/${match.score?.[0]?.w ?? '0'} (${match.score?.[0]?.o ?? '0'})`;
    let score2 = `${match.score?.[1]?.r ?? '0'}/${match.score?.[1]?.w ?? '0'} (${match.score?.[1]?.o ?? '0'})`;
    let teams = getOrderedTeams(match?.score[0], match?.teamInfo)

    let curr = {

      id: match.id,
      matchStarted: match?.matchStarted,
      matchEnded: match?.matchEnded,
      status: match.status,
      date: match.dateTimeGMT,
      matchType: match.matchType,

      team1: {
        shortName: teams[0].shortName === 'N/A' ? teams[0].name : teams[0].shortName,
        img: teams[0].img,
        score: score1
      },

      team2: { shortName: teams[1].shortName == 'N/A' ? teams[1].name : teams[1].shortName, img: teams[0].img, score: score2 },



    }

    matchesObj.push(curr)

  }

  return matchesObj;

}


