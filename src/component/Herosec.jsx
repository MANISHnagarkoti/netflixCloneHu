import React from 'react'
import styled from 'styled-components'

const Herosec = ({tagline}) => {
  return (
    <>

      <Container>



        <Back>
          {tagline}

        </Back>

      </Container>



    </>
  )
}


const Back = styled.div`
color:white;
position: absolute;
font-size: 100px;
margin: auto;
width: 90%;
font-weight: 300;
opacity: 20%;
white-space: nowrap;
z-index: 998;




@media  (max-width: 700px) {
  font-size:60px;
}

@media  (max-width: 400px) {
  font-size: 60px;
}

`

const Container = styled.div`
position: relative;
overflow: hidden;
margin: auto;
width: 100%;
height: 200px;
background-color: black;
display: flex;
align-items: center;



@media  (max-width: 700px) {
  height: 150px;
}



@media  (max-width: 400px) {
 height: 80px;
}


`





export default Herosec
