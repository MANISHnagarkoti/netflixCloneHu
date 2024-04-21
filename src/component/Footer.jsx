import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  return (

      <Wrapper>
<div className='oneline'><img src="images/logo.png" alt="" /></div>

<div className='twoline'> <p className='p-one'>Watch Movie For Free © 2023 Netflix </p>   </div>






      </Wrapper>




   
  )
}


const Wrapper = styled.div`
margin-top: 80px;

.oneline{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: rgba(100,100,100,0.3);


img{
width: 30px;
}

}

.twoline{
width: 100%;
height: 40px;
background-color: rgba(100,100,100,0.3);
display: flex;
justify-content: center;
align-items: center;
color: #b0b0b0;
font-family: 'Poppins', sans-serif;
font-size: 13px;
}


`


export default Footer
