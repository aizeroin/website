import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BasicExample({CardImg, CardText, slug, CardTitle, showButton=false}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${slug}`);
  };
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={CardImg} />
      <Card.Body>
        <Card.Title>{CardTitle}</Card.Title>
        <Card.Text>
          {CardText}
        </Card.Text>
        
      
      {!showButton ?
      <button
      type="button"
      style={{ backgroundColor: '#f57c00', color: 'white' }}
      className="btn btn-sm px-3 py-2 me-md-2 fs-7"
      onClick={handleClick} 
  >
      Learn More
  </button>:
  ""}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;