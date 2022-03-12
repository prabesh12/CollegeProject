import React from "react";
import styled from "styled-components";
import Card from "./Card";
// import Section from "./Section";
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 100px; 
  z-index: -1;  
`;
function Home() {
  return (
    <Container>
      <Card
        productImg="/images/model-s.jpg"
        title="model s"
        description="Order Online for touchless delivery"
      />
         <Card
        productImg="/images/model-x.jpg"
        title="model x"
        description="Order Online for touchless delivery"
      />
         <Card
        productImg="/images/model-y.jpg"
        title="model y"
        description="Order Online for touchless delivery"
      />
         <Card
        productImg="/images/model-s.jpg"
        title="model s"
        description="Order Online for touchless delivery"
      />
         <Card
        productImg="/images/model-x.jpg"
        title="model x"
        description="Order Online for touchless delivery"
      />
         <Card
        productImg="/images/model-y.jpg"
        title="model y"
        description="Order Online for touchless delivery"
      />
         <Card
        productImg="/images/model-s.jpg"
        title="model s"
        description="Order Online for touchless delivery"
      />
    </Container>
  );
}

export default Home;
