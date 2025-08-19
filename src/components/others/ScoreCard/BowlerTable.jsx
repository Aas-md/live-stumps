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
                            bowling?.map((player,idx)=>(
                                <BowlerRow key={idx} player={player}/> 
                            ))
                        }   
                    </tbody>
                </table>
            </div>
    )

}