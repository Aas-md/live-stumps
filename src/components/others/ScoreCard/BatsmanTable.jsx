import BatsmanRow from "./BatsmanRow";
import './BatsmanTable.css'

export default function BatsmanTable({ batting, isHide }) {
   

    return (
        <div className={`bat-table ${isHide}`} >
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
                        Array.isArray(batting) && batting.length > 0 ? (
                            batting?.map((player, idx) => (
                                <BatsmanRow key={idx} player={player} />
                            ))) : (
                            <tr style={{ border: "1px solid #ccc" }}>
                                <td colSpan="7" style={{display: "table-cell", textAlign: "center", padding: "12px", fontStyle: "italic", color: "#555" }}>
                                    Not batted yet
                                </td>
                            </tr>
                        )

                    }
                </tbody>
              

               
            </table>
        </div>
    )

 
}