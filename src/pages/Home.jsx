import React from 'react'
import styled from "styled-components"
import Slider from '../component/Sider'
import { API } from '../api/api'
import Genre from '../component/Genre'
import Tvcomponenet from '../component/Movieslider'


const Container = styled.div`
margin: auto;
width: 100%;
min-height:calc(100vh - 60px) ;
background-position:center;
background-size: cover;
overflow-x: hidden;
margin-top: 50px;

max-width: 1480px;


`





const Home = () => {




  return (



    <Container>



      <Tvcomponenet />
      <Genre />

      
      <Slider type={API.trending} tagline="Trending" />
      <Slider type={API.upcoming} tagline="Upcoming" />


      {/* <Viewer/> */}
      <Slider type={API.toprated} tagline="Top Rated" />




    </Container>



  )
}

export default Home
