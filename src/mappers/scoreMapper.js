import { getOrderedTeams } from "../utils/teamNameUtils.js";
import { formatDateAndTime } from "../utils/dateUtil.js";
import { getRunRate,getRequiredRate,getTarget } from "../utils/runRateUtils.js";
import { getRandomImage } from "../utils/scoreUtils.js";
export function mapScore(data) {

    if (!data) return {}

    let teams = getOrderedTeams(data.score[0], data.teamInfo)
  

    let score1 = `${data.score?.[0]?.r ?? '0'}/${data.score?.[0]?.w ?? '0'} (${data.score?.[0]?.o ?? '0'})`;
    let score2 = `${data.score?.[1]?.r ?? '0'}/${data.score?.[1]?.w ?? '0'} (${data.score?.[1]?.o ?? '0'})`;

    let score = {
        name: data.name,
        status: data.status,
        venue: data.venue,
        matchType: data.matchType,

        date: formatDateAndTime(data.dateTimeGMT),
        tossWinner: data.tossWinner,
        tossChoice: data.tossChoice,
        team1: {
            name: teams[0].name,
            img: teams[0].img,
            score: score1,
            runRate : getRunRate(score1),
            batting: mapbattingScorecard(data.scorecard[0]?.batting),
            bowling: mapBowlingScorecard(data.scorecard[1]?.bowling),
        },
        team2: {
            name: teams[1].name,
            img: teams[1].img,
            score: score2,
             runRate : getRunRate(score2),
             target : getTarget(score1),
             requiredRate : getRequiredRate(score2,getTarget(score1)),
            batting: mapbattingScorecard(data.scorecard[1]?.batting),
            bowling: mapBowlingScorecard(data.scorecard[0]?.bowling),
        }
    }

    return score
}


function mapbattingScorecard(battings = []) {
    if (!battings || battings.length == 0) return []
    let battingArr = []
    console.log('in mapper->',getRandomImage().img)

    for (let batting of battings) {

        let currBatsman = {
            batsman: {
                name: batting.batsman?.name,
                id: batting.batsman?.id,
            },

            r: batting.r,
            '4s': batting['4s'],
            '6s': batting['6s'],
            b: batting.b,
            sr: batting.sr,
            dismissalText: batting['dismissal-text'],
            img: getRandomImage().img
        }
        battingArr.push(currBatsman)

    }
    return battingArr
}

function mapBowlingScorecard(bowlings = []) {
    if (!bowlings || bowlings.length == 0) return []
    let bowlingArr = []
    for (let bowling of bowlings) {

        let currBowler = {
            bowler: {
                name: bowling.bowler?.name,
                id: bowling.bowler?.id,
            },

            o: bowling.o,
            m: bowling.m,
            r: bowling.r,
            w: bowling.w,
            eco: bowling.eco,
            wd: bowling.wd,
            // action: getRandomImage().action,
            img: getRandomImage().img
        }

        bowlingArr.push(currBowler)
    }
    return bowlingArr
}
