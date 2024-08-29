import React from "react";
import { Accordion, Container, Row, Col, Button } from "react-bootstrap";
import "./pack-list.css"; // Import the pack-list styles

const AccordionComponent = ({
  activeKey,
  handleAccordionChange,
  handleGoBack,
  handlePrint,
  printing,
  essentialsData,
}) => {
  // Categories for the accordion sections
  const categories = [
    "🎫 Essentials",
    "🧳 Clothes",
    "🛫 Carry-On",
    "🔌 Misc",
    "💄 Make-Up",
    "🌍 Your Trip",
  ];

  return (
    <Container className="pack-list-container">
      {/* Accordion sections based on categories */}
      <Row>
        {categories.map((category, index) => (
          <Col key={index} md={4}>
            <Accordion
              activeKey={activeKey === index.toString() ? activeKey : undefined}
              onSelect={handleAccordionChange}
              defaultActiveKey={categories.map((_, i) => i.toString())}
              allowToggle={true}
            >
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{category}</Accordion.Header>
                <Accordion.Body>
                  {/* Pack list items for each category */}
                  <ul className="pack-list">
                    {essentialsData && essentialsData[category]
                      ? essentialsData[category].map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))
                      : null}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        ))}
      </Row>

      {/* Buttons for navigation and printing */}
      <Row className="mt-5 mb-5">
        {/* Back button */}
        <Col>
          <Button
            variant="light"
            onClick={handleGoBack}
            className="mt-3"
            style={{
              backgroundColor: "#5e503f",
              padding: "12px 10px",
              fontSize: "20px",
              textDecoration: "none",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#f4f4f4",
              transition: "background-color 0.3s",
              boxShadow: "0px 3px 5px rgba(10, 9, 8, 0.1)",
              marginTop: "25px",
              marginBottom: "50px",
            }}
          >
            Back
          </Button>
        </Col>
        {/* Print button */}
        <Col className="d-flex justify-content-center">
          <Button
            variant="light"
            onClick={handlePrint}
            className="mt-3 mx-auto button"
            disabled={printing}
            style={{
              backgroundColor: "#5e503f",
              padding: "12px 10px",
              fontSize: "20px",
              textDecoration: "none",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#f4f4f4",
              transition: "background-color 0.3s",
              boxShadow: "0px 3px 5px rgba(10, 9, 8, 0.1)",
              marginTop: "25px",
              marginBottom: "50px",
            }}
          >
            {printing ? "Printing..." : "Print Checklist"}
          </Button>
        </Col>

        {/* Placeholder column for correct spacing */}
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AccordionComponent;
