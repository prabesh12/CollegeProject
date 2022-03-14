import React from 'react'
import ProductList from './ProductList';
import Card from './Card';
import styled from "styled-components";
import Header from './Header';
import {Outlet } from "react-router-dom";
const Product = () => {
  return (
    <>
    <Header />
    <Container>
    <ItemContainer>
     { ProductList.map((product)=>{
       return <Card 
       key={product.id}
       image={product.image}
       brand={product.brand}
       name ={product.name}
       link={`/product/${product.id}`}
       />
     })}
     </ItemContainer>
     </Container>
     <Outlet/>
    </>
  )
}
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
`;
 const  Container = styled.div`
  height: 100vh;
  z-index: -1;  
  margin: 20px 30px;
`;


export default Product;