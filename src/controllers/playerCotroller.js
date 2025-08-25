import playerInfo from "../models/playerModel.js";
import { fetchPlayerInfo } from "../api.js";
export default function getPlayerInfo(player_id){
   
    let player = fetchPlayerInfo(player_id)
    return player
}