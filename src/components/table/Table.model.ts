import type { PaginationProps } from '../pagination/Pagination.model'

export interface TableProps {
  columns: string[]
  tableClassName?: string
  data: {
    url: string
    name: string
    td: {
      className?: string
      button: { onClick: () => void; text: string; className?: string }
    }
  }[]
  pagination: PaginationProps
}
