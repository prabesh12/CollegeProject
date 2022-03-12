import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 30%;
height: 40%;
margin: 20px 20px;
 `
 const Wrap = styled.div`
        padding: 2px 10px;
 `

 const ProductImage = styled.img`
 width: max-content;
 height: 80%;
 `

const Card = ( {productImg, title, description, }) => {
  return (
    <Container>
     <ProductImage src = {productImg} />
     <Wrap>
    <h4><b>{title}</b></h4> 
    <p>{description}</p>
    </Wrap>

    </Container>
  )
}

export default Card