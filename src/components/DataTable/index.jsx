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
            <th>Setup Price</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 4 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 4 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
            </tr>
          </tbody>
      </Table>
    )
  }
}
