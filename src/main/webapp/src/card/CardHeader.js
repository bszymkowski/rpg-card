import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import LabelAttribute from './LabelAttribute';
import {strings} from '../strings';

const labels = strings.header;

function CardHeader(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <LabelAttribute
                        label={labels.name}
                        value={props.header.name}
                        onChange={(val) => props.onChange({header: {name: val}})}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.nature}
                        value={props.header.nature}
                        onChange={(val) => props.onChange({header: {nature: val}})}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.generation}
                        value={props.header.generation}
                        onChange={(val) => props.onChange({header: {generation: val}})}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <LabelAttribute
                        label={labels.player}
                        value={props.header.player}
                        onChange={(val) => {
                            props.onChange({header: {player: val}})
                        }}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.demeanor}
                        value={props.header.demeanor}
                        onChange={(val) => {
                            props.onChange({header: {demeanor: val}})
                        }}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.role}
                        value={props.header.role}
                        onChange={(val) => {
                            props.onChange({header: {role: val}})
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <LabelAttribute
                        label={labels.saga}
                        value={props.header.saga}
                        onChange={(val) => {
                            props.onChange({header: {saga: val}})
                        }}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.clan}
                        value={props.header.clan}
                        onChange={(val) => {
                            props.onChange({header: {clan: val}})
                        }}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.shelter}
                        value={props.header.shelter}
                        onChange={(val) => {
                            props.onChange({header: {shelter: val}})
                        }}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default CardHeader;