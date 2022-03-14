import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Card = (props) => {
  return (
    <>
      <Container>
      <Image src={props.image} alt="image" />
        <h3>{props.brand}</h3>
        <p>{props.name}</p>
        <p>{props.price}</p>
       <Link to={props.link}>View Detail</Link>
      </Container>
    </>
  );
};
const Container = styled.div`
  height: 320px;
  text-align: center;
  width: 20%;
  display:flex;
  border-radius: 20px;
  flex-direction:column;
  padding: 0.8em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export default Card;
