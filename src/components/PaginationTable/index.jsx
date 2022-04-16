import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationTable = ({ 
  noOfRows,
  rowsPerPage,
  onPageChange,
  currentPage,
  onPreviousClick,
  onNextClick,
}) => {

  // Counter for number of pages
  const pages = [];
  for(let itr=1; itr <= Math.ceil(noOfRows.length / rowsPerPage); itr++){
    pages.push(itr)
  }

  // if single page
  if (pages.length === 1) return '';

  return (
      <>
        <Pagination className='pagination justify-content-center'>
          {currentPage !== 1 && (
            <Pagination.Prev onClick={onPreviousClick} />
          )}
        
          {pages.map(number => (
            <Pagination.Item key={number} onClick={() => onPageChange(number)}>
              {number}
            </Pagination.Item>
          ))}
          {currentPage !== (pages.length) && (
            <Pagination.Next onClick={onNextClick}/>
          )}
        </Pagination>
      </>
    )
}

export default PaginationTable;
