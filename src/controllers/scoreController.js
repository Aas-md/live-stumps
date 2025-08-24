// import score from '../models/scoreModel.js'
import { fetchScore } from '../api.js';

export default async function getLiveScore(){
    let score = await fetchScore()
    return score;
   
}