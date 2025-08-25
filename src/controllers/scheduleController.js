import scheduleMatches from "../models/scheduleModel.js";
import { fetchUpcoming } from "../api.js";
import { sortmatchByNearestDate } from "../utils/upcomingMatchesUtil.js";
export default async function getScheduleMatches(){
    let matches =  await fetchUpcoming()
    let sortedMatch = sortmatchByNearestDate(matches)
      return sortedMatch
    
}