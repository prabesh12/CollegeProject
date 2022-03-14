import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Container } from "./Styled";
// import { Outlet } from "react-router";
import Header from "./Header";

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
`;

const Card = styled.div`
  text-align: center;
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  padding: 1em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Image = styled.img`
  height: 100px;
  width: auto;
`;

const FeaturedProducts = () => {
  <Header />
  const [data, setData] = useState([]);
  const[query, setQuery] = useState([]);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchProducts();
    }
    return () => (isMounted = false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function fetchProducts() {
    axios
      .get("https://shoppingapiacme.herokuapp.com/shopping/")
      .then((res) => {
        
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
    
      <Container>
        <ItemContainer>
          {data.map((product) => (
            <Card key={product.id}>
              <Image src={product.image} alt="" />
              <h3>{product.brand}</h3>
              <p>{product.item}</p>
              <Link to={`/product/${product.id}`}>View Detail</Link>
            </Card>
          ))}
        </ItemContainer>
      </Container>
    </>
  );
};
export default FeaturedProducts;
