import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationTable = ({ rowsPerPage, totalRows}) => {
  const pageNumbers = [];
  for(let itr=1; itr <= Math.ceil(totalRows / rowsPerPage); itr++){
    pageNumbers.push(itr)
  }
    return (
      <>
        <Pagination>
          {pageNumbers.map(number => (
            <Pagination.Item key={number}>
              {number}
            </Pagination.Item>
          ))}
        </Pagination>
      </>
    )
}

export default PaginationTable
