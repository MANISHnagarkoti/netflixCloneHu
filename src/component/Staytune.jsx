import React from 'react'
import styled from 'styled-components'


const Staytune = () => {
  return (
    <Container>
      <div className='tagline'>

<span> Stay tune </span> <br /> For more updates

      </div>
    </Container>
  )
}


const Container = styled.div`
width: 90%;
margin: auto;
height: 200px;
padding: 20px;
margin-top: 50px;
border-radius: 30px;
background-color: rgba(200,200,200,0.1);
display: flex;
align-items: center;


@media  (max-width: 400px) {
    height: 120px;
    width: 95%;
 }
 


span{
    color: red;
}

.tagline{
color: white;
font-size: 50px;
font-family: 'Big Shoulders Display', cursive;


@media  (max-width: 400px) {
 
font-size: 25px;
}

}


`


export default Staytune
