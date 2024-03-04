import './Table.css'
import { Button } from '../button/Button'
import { Pagination } from '../index'
import type { TableProps } from './Table.model'

export const Table: React.FC<TableProps> = ({ data, columns, tableClassName, pagination }) => {
  const header = (): JSX.Element => {
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
    )
  }

  const body = (): JSX.Element => {
    return (
      <tbody>
        {data.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td className={row.td.className}>
              <Button
                text={row.td.button.text}
                className={row.td.button.className}
                onClick={row.td.button.onClick}
              />
            </td>
          </tr>
        ))}
      </tbody>
    )
  }

  return (
    <>
      <table className={tableClassName}>
        {header()}
        {body()}
      </table>
      <div className="pagination-footer">
        <Pagination {...pagination} />
      </div>
    </>
  )
}
