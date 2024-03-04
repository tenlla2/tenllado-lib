export interface PaginationProps {
    currentPage: {
      number: number
      className?: string
    }
    prevButton: {
      text: string
      className?: string
      onClick: () => void
      disabled: boolean
    }
    nextButton: {
      text: string
      className?: string
      onClick: () => void
      disabled: boolean
    }
    className?: string
  }
  