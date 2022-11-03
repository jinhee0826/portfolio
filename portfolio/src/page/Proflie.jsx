import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataContext from "../context/DataContext";

const Proflie = () => {
    const {state} = useContext(DataContext);

    return (  
        <div>
            <Container>
                <Row>
                    <Col>
                        {
                            state.user.profile ? (
                                <div>

                                </div>
                            ) : (
                                <div>
                                    
                                </div>
                            )
                        }
                    </Col>

                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Proflie;