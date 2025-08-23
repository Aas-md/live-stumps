import './BatsmanTable.css'
import BowlerRow from './BowlerRow.jsx'

export default function BowlerTable({bowling}){

    return (
            <div className="bowl-table bat-table">
                <table>
                    <thead>
                        <tr>
                            <th>Bowler</th>
                            <th>O</th>
                            <th>M</th>
                            <th>R</th>
                            <th>W</th>
                            <th>Econ</th>

                            <th>wd</th>
                        </tr>
                    </thead>
                    <tbody id="bowling-data-1">
                        {
                            Array.isArray(bowling) && bowling.length > 0 ? (bowling?.map((player,idx)=>(
                                <BowlerRow key={idx} player={player}/> 
                            ))): (
                            <tr style={{ border: "1px solid #ccc" }}>
                                <td colSpan="7" style={{display: "table-cell", textAlign: "center", padding: "12px", fontStyle: "italic", color: "#555" }}>
                                    Not Bowled Yet
                                </td>
                            </tr>
                        )

                        }   
                    </tbody>
                </table>
            </div>
    )

}