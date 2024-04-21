import React from 'react'
import styled from 'styled-components'


const Seasoncomponent = ({ data }) => {








  const posterkurl = "https://image.tmdb.org/t/p/w342/"


  return (
    <>


      <Container>

        <h1>Current Season</h1>










        <Seasonwrapper >



          <div className='info'>

            <h1 style={{ color: "white" }}>{data.seasons && data.seasons[data.seasons && data.seasons.length - 1].name}</h1>
            <span className='slash'>|</span>            <h1 style={{ color: "white" }}> Total episode : {data.seasons && data.seasons[data.seasons && data.seasons.length - 1].episode_count}</h1>

          </div>


      <h2>View all </h2>

        </Seasonwrapper>









      </Container>



    </>



  )
}









const Seasonwrapper = styled.div`

display: flex;
justify-content: space-between;
margin-top: 20px;

.info{
  display: flex;
align-items: center;
}

span{
color: white;
font-size:30px;
margin: 0px 30px 0px 30px;

@media  (max-width: 500px) {
  font-size:17px;
  margin: 0px 10px 0px 10px;
}


}


img{

width: 200px;

}





h2{

color:  red;
font-weight: 400;
transition: 0.4s;
cursor: pointer;

@media  (max-width: 500px) {
 font-size: 17px;
}


&:hover{
transform: scale(1.07);

}

}

`

const Container = styled.div`

width: 100%;
min-height: 200px;
width: 90%;
margin: auto;
margin-top: 50px;

@media  (max-width: 500px) {
  margin-top: 20px;
  min-height: 130px;
}

h1{

color:white;
font-size: 30px;

@media  (max-width: 700px) {
font-size: 22px;
}

@media  (max-width: 500px) {
font-size: 17px;
}


}


`


export default Seasoncomponent
