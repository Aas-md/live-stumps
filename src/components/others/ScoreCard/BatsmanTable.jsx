import BatsmanRow from "./BatsmanRow";
import './BatsmanTable.css'

export default function BatsmanTable(){

    return (
         <div className="scorecard-section" id="batting-section-1">
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

                    </tbody>


                </table>
            </div>
    )
}