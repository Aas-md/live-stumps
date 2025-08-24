import liveMathces from "../models/homeModel.js";
import sortMatches from "../utils/liveMatchSortingAlo.js";
import { fetchLiveMatches } from "../api.js";

export default async function getLiveMatches(){

 
    let matches =await fetchLiveMatches()
    // matches = sortMatches(matches)
    return matches

}