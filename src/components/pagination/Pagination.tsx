import { Button } from '../button/Button' // Importa el componente Button
import './Pagination.scss'
import type { PaginationProps } from './Pagination.model'

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  prevButton,
  nextButton,
  className,
}) => {
  return (
    <div className={className}>
      <Button
        text={prevButton.text}
        className={prevButton.className}
        onClick={prevButton.onClick}
        disabled={prevButton.disabled}
      />
      <span className={currentPage.className}>{currentPage.number}</span>
      <Button
        text={nextButton.text}
        className={nextButton.className}
        onClick={nextButton.onClick}
        disabled={nextButton.disabled}
      />
    </div>
  )
}
