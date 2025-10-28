import score from '../models/scoreModel.js'
import { fetchScore } from '../api.js';

export default async function getLiveScore(matchId){
    return await fetchScore(matchId)
    // return score
}