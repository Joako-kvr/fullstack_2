import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Soluciones() {
  const soluciones = [
    {
      icon: '🏠',
      title: 'Hogar 3–5 kW',
      desc: 'Balance ideal entre costo y ahorro mensual.',
    },
    {
      icon: '🏢',
      title: 'PyME 10–20 kW',
      desc: 'Para operación diurna con buena irradiación.',
    },
    {
      icon: '🔋',
      title: 'Off-grid con baterías',
      desc: 'Autonomía en zonas sin red eléctrica.',
    },
  ];

  return (
    <section id="soluciones" className="py-5 soluciones-section">
      <Container>
        {/* Encabezado alineado como mockup */}
        <Row className="align-items-center mb-4">
          <Col xs={12} md={6}>
            <h2 className="section-title mb-0">Soluciones</h2>
          </Col>
          <Col xs={12} md={6} className="text-md-end text-muted small">
            Kits residenciales, PyME, off-grid con baterías e híbridos.
          </Col>
        </Row>

        {/* Cards */}
        <Row className="row-cols-1 row-cols-md-3 g-4">
          {soluciones.map((s, i) => (
            <Col key={i}>
              <Card className="h-100 shadow-sm border-0 soluciones-card">
                <Card.Body>
                  <div className="icon-pill mb-3">{s.icon}</div>
                  <Card.Title className="fw-semibold mb-1">{s.title}</Card.Title>
                  <Card.Text className="text-muted mb-0">{s.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Soluciones;
