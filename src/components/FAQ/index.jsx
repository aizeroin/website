// AlwaysOpenExample.jsx
import Accordion from 'react-bootstrap/Accordion';
import './index.css';

function FAQ({ faqList }) {
  return (
    <div className="accordion-wrapper mx-auto my-5">
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {faqList.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{item.Question}</Accordion.Header>
            <Accordion.Body>{item.Answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQ;
