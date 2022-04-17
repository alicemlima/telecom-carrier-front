import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar';
import DataTable from './components/DataTable';
import SearchBar from './components/SearchBar'
import { Container, Spinner, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveData } from './ducks/dataSlice';

function App() {
  //Serch state
  // const [ currentFilter, setCurrentFilter ] = React.useState('');
  const [ searchValue, setSearchValue ] = React.useState('')

  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
  } = useSelector(state => state);

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

  

  return (
    <div>
      <HeaderBar />
      <Container>
        <Row>
        <SearchBar value={searchValue} onChange={searchChange}/>
        </Row>
        <DataTable searchValue={searchValue} />
      </Container>
    </div>
  );
}

export default App;
