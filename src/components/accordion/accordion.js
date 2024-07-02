import Accordion from 'react-bootstrap/Accordion'; 
import ImageComponent from '../image/image';
import CustomProgress from '../progressbar/progressbar';
function CustomAccordion(){
    return(
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body>
       <ImageComponent/>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        <ImageComponent/>
        <CustomProgress/>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
    );
};
export default CustomAccordion;