import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Col, Container, Row } from "react-bootstrap";


const Home = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

    const wedding = ([
      {img : "1.jpg"},
      {img : "2.jpg"},
      {img : "3.jpg"},
      {img : "4.jpg"},
      {img : "5.jpg"},
      {img : "6.jpg"} 
    ]);

    return (  
        <Container>
          <Row className="" 
          // 그거 css 넣어줘야 함 
          >
            <Col className= " my-3">
              <Slider {...settings} >
              { wedding.map((img,index)=>(
                  <div key={index}>
                    <img 
                    style={{ width : "1200px" , height : "900px"}}
                    src={require(`../img/${img.img}`)} alt="" />
                  </div>
                )) }
        </Slider>
            </Col>
          </Row>

      </Container>
    );
}

export default Home;