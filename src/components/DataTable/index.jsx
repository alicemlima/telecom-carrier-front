import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { paginate } from '../../utils/paginate';
import './styles.module.css'

const DataTable = ({ pageNumber, pageSize }) => {
  const {
    items: data,
  } = useSelector(state => state.data);

  const paginatedPost = paginate(data, pageNumber, pageSize)
    return (
      <Table responsive>
          <thead>
            <th>ID</th>
            <th>Number</th>
            <th>Monthy Price</th>
            <th>Monthy Setup Price</th>
          </thead>
          <tbody>
            {(paginatedPost).map(values => (
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