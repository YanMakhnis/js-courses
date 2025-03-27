import TableRow from '../tableRow/tableRow.jsx'
import TableHead from '../tableHead/tableHead.jsx'


function Table(...props) {
    console.log(props)
    let patientsData = props[0].patients.map((patient) => {
        return <TableRow key = {patient.name + patient.surname} patient = {patient}></TableRow>
    })
    return <table>
        <TableHead></TableHead>
        <tbody>
            {patientsData}
        </tbody>

    </table>

}

export default Table