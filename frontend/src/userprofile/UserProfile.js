import React from 'react'
import {connect} from "react-redux";
import {Button, Col, Container, Input, Row} from "reactstrap";
import strings from "./strings"
import {changeName, changeSurname} from "./userProfileActions";
import deepEquals from "deep-equal"

const UserProfile = ({profile, base, changeName, changeSurname}) => {

    return (
        <Container>
            <Row>
                <Col>
                    //todo bsz
                    {deepEquals(profile, base) ? "" : <Button>Update Profile</Button>}
                    <img
                        src={profile.pictureURI}
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
                                value={profile.name || ""}
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
                                value={profile.surname || ""}
                                onChange={e => changeSurname(e.target.value)}
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
                                value={profile.email || ""}
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
                                value={profile.pictureURI || ""}
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
    const profile = state.profile.current;
    const base = state.profile.base;
    return {profile, base};
};

const mapDispatchToProps = dispatch => {
    return {
        changeName: newName => dispatch(changeName(newName)),
        changeSurname : newSurname => dispatch(changeSurname(newSurname))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);