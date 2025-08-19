import BatsmanRow from "./BatsmanRow";
import './BatsmanTable.css'

export default function BatsmanTable({batting}){
    // console.log(team1)
    return (
         <div className="bat-table">
                <table>
                    <thead>
                        <tr>
                            <th>Batsman</th>
                            <th>R</th>
                            <th>B</th>
                            <th>4s</th>
                            <th>6s</th>
                            <th>SR</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody id="batting-data-1">
                        {
                            batting?.map((player,idx)=>(
                               <BatsmanRow key={idx} player={player}/>
                            ))
                        }
                    </tbody>


                </table>
            </div>
    )
}