import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar';
import DataTable from './components/DataTable';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <HeaderBar />
      <Container>
        <DataTable />
      </Container>
    </div>
  );
}

export default App;
