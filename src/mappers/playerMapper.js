import { formatDate } from "../utils/dateUtil.js"
export function mapPlayerProfileObj(data){

    if(!data)return {}

    const playerInfo = {
        id : data.id,
        name : data.name,
        country : data.country,
        dateOfBirth : formatDate(data.dateOfBirth),
        role : data.role,
        battingStyle : data.battingStyle,
        bowlingStyle : data.bowlingStyle,
        placeOfBirth : data.placeOfBirth,
        playerImg : data.playerImg,

    }

    return playerInfo
}
