import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLightbulb, FaUsers, FaRocket, FaShieldAlt } from "react-icons/fa";
import "./CoreValues.css";

const values = [
  {
    icon: <FaLightbulb size={40} className="mb-3 text-primary" />,
    title: "Innovation",
    description:
      "We continuously explore emerging technologies to build intelligent and efficient solutions.",
  },
  {
    icon: <FaUsers size={40} className="mb-3 text-success" />,
    title: "Collaboration",
    description:
      "We believe in teamwork, transparency, and building together with our clients and community.",
  },
  {
    icon: <FaRocket size={40} className="mb-3 text-danger" />,
    title: "Excellence",
    description:
      "We strive for high performance, continuous learning, and exceeding expectations.",
  },
  {
    icon: <FaShieldAlt size={40} className="mb-3 text-warning" />,
    title: "Integrity",
    description:
      "We value honesty, responsibility, and doing what’s right—always.",
  },
];

const CoreValues = () => {
  return (
    <section className="pt-4 core-values-section">
      <Container>
        <Row>
          {values.map((val, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center p-3 core-value-card bg-light">
                {val.icon}
                <h5 className="fw-semibold">{val.title}</h5>
                <p className="text-muted small">{val.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CoreValues;
