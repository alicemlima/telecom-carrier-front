import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar';
import DataTable from './components/DataTable';
import PaginationTable from './components/PaginationTable';
import SearchBar from './components/SearchBar'
import { Container, Spinner, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveData } from './ducks/dataSlice';

function App() {
  //Serch state
  const [ currentFilter, setCurrentFilter ] = React.useState('');
  const [ searchValue, setSearchValue ] = React.useState('')
  //Pagination state
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

  //Search
  const searchChange = (value) => {
    setSearchValue(value)
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
        <Row>
        <SearchBar value={searchValue} onChange={searchChange}/>
        </Row>
        <DataTable pageNumber={currentPage} pageSize={rowsPerPage} searchValue={searchValue} />
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
