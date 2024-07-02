import Spinner from 'react-bootstrap/Spinner';

function CustomSpinner() {
  return (
    <Spinner animation="border" role="status" variant="danger">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default CustomSpinner;