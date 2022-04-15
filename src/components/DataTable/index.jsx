import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import './styles.module.css'

export default class index extends Component {
  render() {
    return (
      <Table responsive>
          <thead>
            <th>ID</th>
            <th>Number</th>
            <th>Monthy Price</th>
            <th>Monthy Setup Price</th>
            <th>Status</th>
          </thead>
          <tbody>
            {(this.props.info).map(values => (
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
}
