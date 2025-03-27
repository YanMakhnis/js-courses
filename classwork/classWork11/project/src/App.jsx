import { useState } from 'react'
import patientsObj from './static/patients.json'
import Table from './components/table/table'

import './App.css'
import PageTitle from './components/pageTitle/PageTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageTitle>PageTitle!</PageTitle>
      <Table patients = {patientsObj}></Table>
    </>
  )
}

export default App
