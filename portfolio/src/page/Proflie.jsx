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
                        <h2>{state.user.name}</h2>
                        <hr />
                        <h2>찜 목록</h2>
                        <ul>
                            {state.user.likelist.map((like)=>(<li>{}</li>))}
                        </ul>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Proflie;