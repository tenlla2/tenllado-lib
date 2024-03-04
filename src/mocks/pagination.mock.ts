export const PAGINATION = {
  currentPage: {
    className: 'pagination__page',
    number: 1,
  },
  totalPages: 2,
  prevButton: {
    onClick: () => console.log('prev'),
    text: 'Previous',
    className: 'custom-button__pagination',
    disabled: true,
  },
  nextButton: {
    onClick: () => console.log('next'),
    text: 'Next',
    className: 'custom-button__pagination',
    disabled: false,
  },
  className: 'pagination',
}
