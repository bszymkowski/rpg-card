import React from 'react';
import {Input, Container, Row, Col} from 'reactstrap'
import PropTypes from 'prop-types';

const LabelAttribute = ({label, value, valueChange}) => (
    <Container>
        <Row>
            <Col xl={{size: 4}} lg={{size: 4}}>
                <strong>{label} </strong>
            </Col>
            <Col xl={{size: 8}} lg={{size: 8}}>
                <Input type="textArea"
                       value={value || ""}
                       onChange={(e) => {
                           valueChange(e.target.value)
                       }}/>
            </Col>
        </Row>
    </Container>
);

LabelAttribute.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    valueChange: PropTypes.func.isRequired
};


export default LabelAttribute;