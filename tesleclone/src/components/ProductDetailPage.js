import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import StickyHeadTable from "./Table";
import ProductList from './ProductList';
import { Button } from "@material-ui/core";

const Product = () => {
  const { id } = useParams();
     
    if(id === ProductList.id)
    
    { 
      console.log(id);

      const getData = ProductList[id-1];
      console.log(getData);
    }
  return (
    <>
      {ProductList.map((item) => {
        return (
          <Container>
            <ProductContainer key={item.id}>
              <ImgandDes>
                <ProductImage src={item.image} alt="" />
                <ProductDes>{item.description}</ProductDes>
              </ImgandDes>
              <Info>
                <Brand>{item.brand}</Brand>
                <h2>{item.name}</h2>
                <Price>
                  <strong>Price:</strong> {item.price}
                </Price>
                <p>
                  <strong>Color:</strong> {item.color}
                </p>
                <Button style={{backgroundColor:"", Color:"#fffff", margin: "10px 0px"}} variant="contained">Buy Now</Button>
              </Info>
            </ProductContainer>
            <hr />
          </Container>
        );
      })}
      <Container>
        <StickyHeadTable />
      </Container>
    </>
  );
};
const Container = styled.div`
  height: auto;
  margin: 10px 80px;
`;
const ProductContainer = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 40% 60%;
  gap: 1em;
`;

const ImgandDes = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  padding: 20px;
`;
const ProductDes = styled.p`
  overflow: scroll;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 3px 14px -6px rgba(120, 120, 120, 1);
  -webkit-box-shadow: 1px 3px 14px -6px rgba(120, 120, 120, 1);
  -moz-box-shadow: 1px 3px 14px -6px rgba(120, 120, 120, 1);
`;
const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 3px 14px -6px rgba(120, 120, 120, 1);
  -webkit-box-shadow: 1px 3px 14px -6px rgba(120, 120, 120, 1);
  -moz-box-shadow: 1px 3px 14px -6px rgba(120, 120, 120, 1);
`;
const Info = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  // grid-template-rows: repeat(4,auto);
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 3px 14px -6px rgba(120, 120, 120, 1);
  -webkit-box-shadow: 1px 3px 14px -6px rgba(120, 120, 120, 1);
  -moz-box-shadow: 1px 3px 14px -6px rgba(120, 120, 120, 1);
`;
const Brand = styled.h1`
  font-weight: 1000;
`;
const Price = styled.p`
  margin: 20px 0;
  font-weight:600;
`;

export default Product;
