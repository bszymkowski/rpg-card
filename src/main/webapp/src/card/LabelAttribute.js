import React, {Component} from 'react';
import {Input, Container, Row, Col} from 'reactstrap'

function LabelAttribute(props) {
    return (
        <Container>
            <Row>
                <Col xl={{size: 4}} lg={{size: 4}}>
                    <strong>{props.label}: </strong>
                </Col>
                <Col xl={{size: 8}} lg={{size: 8}}>
                    <Input type="textArea" value={props.value} onChange={(e) => {props.onChange(e.target.value)}}/>
                </Col>
            </Row>
        </Container>
    )
}

export default LabelAttribute;