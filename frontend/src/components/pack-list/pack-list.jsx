import React, { useState } from 'react';
import './pack-list.css';
import Destination from './destination';
import AccordionComponent from './accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import essentialsData from './essentials.json';

function PackList() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [activeKey, setActiveKey] = useState(null);

  // Function to update essentialsData based on the selected destination
  const updateEssentialsData = (destination) => {
    const commonSections = { ...essentialsData };

    switch (destination) {
      case 'Sun':
        commonSections["🌍 Your Trip"] = ["Sunscreen", "Sunglasses", "Beachwear", "Dry Bag", "Beach towel", "After Sun"
        ];
        break;
      case 'Snow':
        commonSections["🌍 Your Trip"] = ["Winter coat", "Snow boots", "Thermal layers"];
        break;
      case 'City':
        commonSections["🌍 Your Trip"] = ["City map", "Comfortable shoes", "Camera"];
        break;
      case 'Business':
        commonSections["🌍 Your Trip"] = ["Business attire", "Laptop", "Presentation materials"];
        break;
      default:
        commonSections["🌍 Your Trip"] = [];
        break;
    }

    return commonSections;
  };

  const handleAccordionChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  const handleGoBack = () => {
    setSelectedDestination(null);
  };

  const handleDestinationSelect = (destination) => {
    
    setSelectedDestination(destination);
    setActiveKey(null); // Close the accordion when a new destination is selected
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="main-container">
      <Container className="custom-container mt-4 pack-list-container custom-width-container">
        <Row>
          <Col>
            <Destination
              handleDestinationSelect={handleDestinationSelect}
              handleHover={() => {}}
              handleLeave={() => {}}
            />
          </Col>
        </Row>
      </Container>

      <Container className="custom-container mt-4 pack-list-container">
        <Row>
          <Col>
            {selectedDestination ? (
              <AccordionComponent
                id="accordion-section"
                activeKey={activeKey}
                handleAccordionChange={handleAccordionChange}
                handleGoBack={handleGoBack}
                handlePrint={handlePrint}
                printing={false}
                essentialsData={updateEssentialsData(selectedDestination)}
              />
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PackList;