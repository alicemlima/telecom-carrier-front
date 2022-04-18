import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import HeaderBar from './components/HeaderBar';
import DataTable from './components/DataTable';
import SearchBar from './components/SearchBar';
import ModalForm from './components/ModalForm';
import { retrieveData } from './ducks/dataSlice';

function App() {
  const [ searchValue, setSearchValue ] = React.useState('')
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(retrieveData());
  }, [dispatch]);

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
