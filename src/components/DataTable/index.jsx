import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { paginate } from '../../utils/paginate';
import './styles.module.css'

const DataTable = ({ pageNumber, pageSize, searchValue }) => {
  const {
    items: data,
  } = useSelector(state => state.data);

  //Search
  let  searchResult = 0;

  if (searchValue) {
    searchResult = data.filter((data) =>
    data.value.includes(searchValue)
    );
  }

  //Pagination
  const paginatedRow = paginate(data, pageNumber, pageSize);
  
    return (
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
            
            {searchValue && searchResult.map(values => (
              <tr>
                <td>{values.id}</td>
                <td>{values.value}</td>
                <td>{values.currency} {values.monthyPrice}</td>
                <td>{values.currency} {values.monthySetupPrice}</td>
              </tr>
            ))}
            {!searchValue && (paginatedRow).map(values => (
              <tr>
                <td>{values.id}</td>
                <td>{values.value}</td>
                <td>{values.currency} {values.monthyPrice}</td>
                <td>{values.currency} {values.monthySetupPrice}</td>
              </tr>
          ))}
          </tbody>
      </Table>
    )
}

export default DataTable;