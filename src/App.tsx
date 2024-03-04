import { Table } from '@/components'
import { COLUMNS, DATA, PAGINATION } from '@/mocks'

function App() {
  return (
    <Table columns={COLUMNS} data={DATA} tableClassName="pokemon-table" pagination={PAGINATION} />
  )
}

export default App
