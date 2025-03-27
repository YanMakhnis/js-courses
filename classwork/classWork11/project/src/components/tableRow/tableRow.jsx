import TableData from '../tableData/tableData.jsx'

function TableRow({ patient }) {

    return <tr>
        <td>{patient.name}</td>
        <td>{patient.surname}</td>
        <td>{patient.age}</td>
        <td>{patient.gender}</td>
        <td>{patient.kids}</td>
        <td>{patient.vaccinated ? 'Да' : 'Нет'}</td>
    </tr>


}

export default TableRow