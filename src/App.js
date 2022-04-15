import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar';
import DataTable from './components/DataTable';
import { Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveData } from './ducks/dataSlice';

function App() {
  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    items: data,
  } = useSelector(state => state.data);

  React.useEffect(() => {
    dispatch(retrieveData())
  }, [dispatch]);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  if (isError) {
    return (
      <p>Deu ruim!</p>
    )
  }

  const items = data?.map((number) =>
    <li key={number.id}>
      {number.value}
      +
      {number.id}
    </li>
  );

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
