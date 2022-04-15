import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationTable = ({ rowsPerPage, totalRows, paginate}) => {
  const pageNumbers = [];
  for(let itr=1; itr <= Math.ceil(totalRows / rowsPerPage); itr++){
    pageNumbers.push(itr)
  }
    return (
      <>
        <Pagination>
          {pageNumbers.map(number => (
            <Pagination.Item key={number} onClick={() => paginate(number)}>
              {number}
            </Pagination.Item>
          ))}
        </Pagination>
      </>
    )
}

export default PaginationTable
