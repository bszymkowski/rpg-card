import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import CardHeader from "./card/CardHeader";

class App extends Component {

    state = {
        header : {}
    };

    onChange = (change) => {
        const newState = Object.assign({}, this.state, change);
        this.setState(newState);
    };


    componentDidMount() {
        fetch('api/character')
            .then(
                (ok) => {return ok.json()}
            )
            .then(data => {
                const newState = Object.assign({}, this.state, data);
                this.setState(newState);
            });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <header className="text-center">
                            <h1>Wampir: Maskarada</h1>
                        </header>
                    </Col>
                </Row >
                <CardHeader header={this.state.header} onChange={this.onChange} />
            </Container>
        );
    }
}

export default App;
