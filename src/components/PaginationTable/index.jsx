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

  const renderPages = () => {
    let currentPages = [];
    let lim = 5;
    let startPage, endPage;

    if(pages.length <= lim){
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
      );
    }
    else {
      startPage = currentPage;
      if(startPage !== pages.length && (startPage + 1) !== pages.length){
        if((currentPage + lim - 1) > pages.length){
          endPage = pages.length
        }
        else{
          endPage = currentPage + lim - 1;
        }
      }
      else {
        endPage = pages.length
      }
      for (let itr=startPage; itr<= endPage; itr++){
        currentPages.push(itr);
      }
      return (
        <>
        <Pagination className='pagination justify-content-center'>
          {currentPage !== 1 && (
            <Pagination.Prev onClick={onPreviousClick} />
          )}
          {currentPages.map(number => (
            <Pagination.Item key={number} onClick={() => onPageChange(number)}>
              {number}
            </Pagination.Item>
          ))}
          {currentPage !== (pages.length) && (
            <Pagination.Next onClick={onNextClick}/>
          )}
        </Pagination>
      </>
      );
    }
  }
  return renderPages();
}

export default PaginationTable;
