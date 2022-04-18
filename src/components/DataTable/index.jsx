import React from 'react'
import { Table, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux';

import PaginationTable from '../PaginationTable';
import { paginate } from '../../utils/paginate';
import './styles.module.css'

const DataTable = ({ searchValue }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage] = React.useState(20);
  
  React.useEffect(() => {
    if(searchValue){
      setCurrentPage(1)
    }
  },[searchValue])

  const {
    isLoading,
    isError,
    items: data,
  } = useSelector(state => state.data);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  if (isError) {
    return (
      <p>ERROR!</p>
    )
  }
  
  //Search
  let searchResult;
  let paginatedRow;
  let dataRows = data;
  paginatedRow = paginate(data, currentPage, rowsPerPage);

  if (searchValue) {
    searchResult = data.filter((data) =>
    data.value.includes(searchValue)
    );
    paginatedRow = paginate(searchResult, currentPage, rowsPerPage);
    dataRows = searchResult;
  }

  //Pagination
  const previousClickHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextClickHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  const pageChangeHandler = (page) => {
    setCurrentPage(page);
  };
  
    return (
      <>
      <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Number</th>
              <th>Monthy Price</th>
              <th>Monthy Setup Price</th>
              </tr>
          </thead>
          <tbody>
            {searchValue && paginatedRow.map(values => (
              <tr key={values.id}>
                <td>{values.id}</td>
                <td>{values.value}</td>
                <td>{values.currency} {values.monthyPrice}</td>
                <td key={values.monthySetupPrice}>{values.currency} {values.monthySetupPrice}</td>
              </tr>
            ))}
            {!searchValue && (paginatedRow).map(values => (
              <tr key={values.id}>
                <td >{values.id}</td>
                <td>{values.value}</td>
                <td>{values.currency} {values.monthyPrice}</td>
                <td>{values.currency} {values.monthySetupPrice}</td>
              </tr>
          ))}
          </tbody>
      </Table>
      <PaginationTable
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          noOfRows={dataRows}
          onPreviousClick={previousClickHandler}
          onNextClick={nextClickHandler}
          onPageChange={pageChangeHandler}
        />
      </>
    )
}

export default DataTable;