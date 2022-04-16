import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar';
import DataTable from './components/DataTable';
import PaginationTable from './components/PaginationTable';
import { Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveData } from './ducks/dataSlice';

function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    items: data,
  } = useSelector(state => state.data);

  React.useEffect(() => {
    dispatch(retrieveData());
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
    <div>
      <HeaderBar />
      <Container>
        <DataTable pageNumber={currentPage} pageSize={rowsPerPage} />
        <PaginationTable
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          noOfRows={data}
          onPreviousClick={previousClickHandler}
          onNextClick={nextClickHandler}
          onPageChange={pageChangeHandler}
        />
      </Container>
    </div>
  );
}

export default App;
