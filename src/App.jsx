import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar';
import DataTable from './components/DataTable';
import SearchBar from './components/SearchBar';
import ModalForm from './components/ModalForm';
import { Container, Spinner, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveData } from './ducks/dataSlice';

function App() {
  const [ searchValue, setSearchValue ] = React.useState('')
  const [modalShow, setModalShow] = React.useState(true);

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
          <Button
            variant="dark"
            className="my-2 mx-3 w-auto"
            onClick={() => setModalShow(true)}
          >
          Register
          </Button>
          <ModalForm
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Row>
        <DataTable searchValue={searchValue} />
      </Container>
    </div>
  )
}

export default App;
