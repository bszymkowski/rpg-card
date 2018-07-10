import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import LabelAttribute from './LabelAttribute';
import {strings} from './../strings';
import PropTypes from 'prop-types';

const labels = strings.header;

const Header = ({header, onChangeValues}) => (
    <Container>
        <Row>
            <Col>
                <header className="text-center">
                    {/*<h1>{labels.title}</h1>*/}
                </header>
            </Col>
        </Row>
        <Row>
            <Col>
                <LabelAttribute
                    label={labels.name}
                    value={header.name}
                    valueChange={(val) => {
                        onChangeValues({header: {name: val}}
                        )
                    }}
                />
            </Col>
            <Col>
                <LabelAttribute
                    label={labels.nature}
                    value={header.nature}
                    valueChange={(val) => onChangeValues({header: {nature: val}})}
                />
            </Col>
            <Col>
                <LabelAttribute
                    label={labels.generation}
                    value={header.generation}
                    valueChange={(val) => onChangeValues({header: {generation: val}})}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <LabelAttribute
                    label={labels.player}
                    value={header.player}
                    valueChange={(val) => {
                        onChangeValues({header: {player: val}})
                    }}
                />
            </Col>
            <Col>
                <LabelAttribute
                    label={labels.demeanor}
                    value={header.demeanor}
                    valueChange={(val) => {
                        onChangeValues({header: {demeanor: val}})
                    }}
                />
            </Col>
            <Col>
                <LabelAttribute
                    label={labels.role}
                    value={header.role}
                    valueChange={(val) => {
                        onChangeValues({header: {role: val}})
                    }}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <LabelAttribute
                    label={labels.saga}
                    value={header.saga}
                    valueChange={(val) => {
                        onChangeValues({header: {saga: val}})
                    }}
                />
            </Col>
            <Col>
                <LabelAttribute
                    label={labels.clan}
                    value={header.clan}
                    valueChange={(val) => {
                        onChangeValues({header: {clan: val}})
                    }}
                />
            </Col>
            <Col>
                <LabelAttribute
                    label={labels.shelter}
                    value={header.shelter}
                    valueChange={(val) => {
                        onChangeValues({header: {shelter: val}})
                    }}
                />
            </Col>
        </Row>
    </Container>
);

Header.propTypes = {
    header: PropTypes.object.isRequired,
    onChangeValues : PropTypes.func.isRequired
};

export default Header;