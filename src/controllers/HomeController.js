import liveMathces from "../models/homeModel.js";
import sortMatches from "../utils/liveMatchSortingAlo.js";

export default function getLiveMatches(){

    let matches =  sortMatches(liveMathces)
    return matches

}