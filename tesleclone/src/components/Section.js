// import React from "react";
// import styled from "styled-components";

// const Wrap = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-image: ${props => `url("/images/${props.bgImage}")` } ;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `;
// const ItemText = styled.div`
//   padding-top: 15vh;
//   text-transform: uppercase;
//   align-items: center;
// `;

// const Buttons = styled.div`
     
// `
// const ButtonGroup = styled.div`
//   display: flex;
//   margin-bottom: 30px;
//   @media(max-width:768px){
//       flex-direction:column;    
//   }
// `;
// const LeftButton = styled.div`
//   background-color: rgba(23, 26, 32, 0.8);
//   height: 40px;
//   width: 256px;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 100px;
//   opacity: 0.85;
//   text-transform: uppercase;
//   font-size: 12px;
//   cursor: pointer;
//   margin:8px;
//   &:hover {
//       opacity: 0.5;
//       color: #FF7909
//       ;
//   }
// `;

// const RightButton = styled(LeftButton)`
// background:white;
// opacity: 0.85;
// color: black;
// `;

// const DownArrow = styled.img`
// margin-top: 20px;
// height: 40px;
// animation: animateDown infinite 1.5s;
// overflow-x: hidden;
// `

// function Section( {title, description, backgroundImg, leftButtonTxt, rightButtonTxt}) {
//   return (
//     <Wrap bgImage ={backgroundImg}>
//       <ItemText>
//         <h1>{title}</h1>
//         <p>{description}</p>
//       </ItemText>
//       <Buttons>
//       <ButtonGroup>
//         <LeftButton>{leftButtonTxt}</LeftButton>

//         {
//             rightButtonTxt &&
//         <RightButton>{rightButtonTxt}</RightButton>

//         }
//       </ButtonGroup>
//       <DownArrow src = "images/down-arrow.svg" />
//       </Buttons>
//     </Wrap>
//   );
// }




// export default Section;


