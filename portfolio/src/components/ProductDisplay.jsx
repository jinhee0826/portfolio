import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProductDisplay = (props) => {
    const {product} = props;
    const [index, setIndex] = useState(0)
    return (  
        <Container>
            <Row>
                <Col>
                <div>
                    <img src={require(`../img${product.productPicture[index]}`)} alt="" />
                </div>
                </Col>
                <Col>
                <div>
                    <h1>{product.productName}</h1>
                    <p>{product.productDetail}</p>

                </div>
                <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                구매
              </Button>
              <Button variant="light" size="lg">
                장바구니
              </Button><Button variant="light" size="lg">
                찜
              </Button>
            </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDisplay;