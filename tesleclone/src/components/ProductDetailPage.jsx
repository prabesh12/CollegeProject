import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import StickyHeadTable from "./Table";
import ProductList from "./ProductList";
import { Button } from "@material-ui/core";

const Product = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      filterProduct();
    }
    return () => (isMounted = false);
  }, []);
  function filterProduct() {
    let p = ProductList.filter((p) => {
      return p.id.toString() === id;
    })[0];
    setProduct(p);
  }
  return (
    <>
      {product && (
        <Container>
          <ProductContainer>
            <ImgandDes>
              <ProductImage src={product.image} alt="image" />
              <ProductDes>{product.detail}</ProductDes>
            </ImgandDes>
            <Info>
              <Brand>{product.brand}</Brand>
              <h2>{product.name}</h2>
              <Price>
                <strong>Price:</strong> {product.price}
              </Price>
              <p>
                <strong>Color:</strong>
              </p>
              <Button
                style={{
                  backgroundColor: "",
                  Color: "#fffff",
                  margin: "10px 0px",
                }}
                variant="contained"
              >
                Buy Now
              </Button>
            </Info>
          </ProductContainer>
        </Container>
      )}

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
  height: 50%;
  display: flex;
  flex-direction: column;
  // grid-template-rows: repeat(4,auto);
  margin-top: 120px;
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
  font-weight: 600;
`;

export default Product;
