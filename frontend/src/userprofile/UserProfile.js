import React from 'react'
import {connect} from "react-redux";
import {Button, Col, Container, Input, Row} from "reactstrap";
import strings from "./strings"
import {changeName} from "./userProfileActions";

const UserProfile = ({user, changeName}) => {
    return (
        <Container>
            <Row>
                <Col>
                    {user.dirty ? "dsfa" : "fdsaf"}
                    <img
                        src={user.pictureURI}
                        alt=""
                    />
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <div><strong>
                                {strings.name}
                            </strong>
                            </div>
                            <Input
                                type="text"
                                value={user.name || ""}
                                onChange={e => changeName(e.target.value)}
                            />
                        </Row>
                        <Row>
                            <div><strong>
                                {strings.surname}
                            </strong>
                            </div>
                            <Input
                                type="text"
                                value={user.surname || ""}
                                onChange={e => console.log(e)}
                            />
                        </Row>
                        <Row>
                            <div><strong>
                                {strings.email}
                            </strong>
                            </div>
                            <Input
                                disabled
                                type="text"
                                value={user.email || ""}
                                onChange={e => console.log(e)}
                            />
                        </Row>
                        <Row>
                            <div><strong>
                                {strings.picture}
                            </strong>
                            </div>

                        </Row>
                        <Row>
                            <Input
                                disabled
                                type="text"
                                value={user.pictureURI || ""}
                                onChange={e => console.log(e)}
                            />



                            <Button
                                color="primary"
                            >{strings.changeProfilePicture}</Button>

                        </Row>


                    </Container>
                    <div>
                    </div>
                </Col>
            </Row>

        </Container>
    )
};


const mapStateToProps = state => {
    const user = state.profile;
    console.log(state);
    return {user};
};

const mapDispatchToProps = dispatch => {
    return {
        changeName: newName => dispatch(changeName(newName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);