import './MatchInfoCard.css'

export default function MatchInfocard({matchInfo : info}) {


    return (
        <div className="matchInfo">
     
                <div className="box">
                    <h1>{info.name}</h1>
                </div>
                <div className="box">
                    <span >Venue :</span>
                    <span>{info.venue}</span>
                </div>

                <div className="box">
                    <span >Date :</span>
                    <span>{info.date}</span>
                </div>

                <div className="box">
                    <span >Format :</span>
                    <span>{info.format}</span>
                </div>
                <div className="box">
                    <span id="result">{info.status}</span>
                </div>

            </div>

    )
}