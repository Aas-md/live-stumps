import { fetchCompleted } from "../api.js";
import pastMatches from "../models/pastModel.js";

export default async function getPastMatches(){
    return await fetchCompleted()

}