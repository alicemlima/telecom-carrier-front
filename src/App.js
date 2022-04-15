import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar';
import DataTable from './components/DataTable';
import PaginationTable from './components/PaginationTable';
import { Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveData } from './ducks/dataSlice';

function App() {
  const [rows, setRows] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);

  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    items: data,
  } = useSelector(state => state.data);

  React.useEffect(() => {
    dispatch(retrieveData());
    setRows(data);
  }, [dispatch]);
  
  if (isLoading) {
    return (
      <Container>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    )
  }

  if (isError) {
    return (
      <p>Deu ruim!</p>
    )
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);


  return (
    <div>
      <HeaderBar />
      <Container>
        <DataTable info={currentRows} />
        <PaginationTable rowsPerPage={rowsPerPage} totalRows={rows.length} paginate={paginate}/>
      </Container>
    </div>
  );
}

export default App;
