import React, { useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { useState } from 'react';

// import required modules
import { Autoplay, EffectFade } from "swiper";
import { useLayoutEffect } from 'react';






class Tvcomponenet extends React.Component {


    // const [data, ddata] = useState([])

    constructor() {
        super();
        this.state = { data: [] };
    }






    componentDidMount() {


        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=788d2dc1d093d3a3ea97e0ab0df1d20a&language=en-US&page=1`).then((d) => {

             this.setState( {data: d.data.results  }  )

        })





    }






    render() {


        return (



            <>







                <Swiper
                    effect={"fade"}
                    slidesPerView={1}
                    spaceBetween={40}
                    className="mySwiper"
                    modules={[Autoplay, EffectFade]}
                    autoplay={{
                        delay: 5500,

                    }}
                >




                    {

                        this.state.data.slice(0, 7).map((e, i) => {

                            return (

                                <SwiperSlide key={i}>
                                    <Link to={`/${e.id} `} >

                                        <Wrap background={e.backdrop_path}>



                                            <Title>

                                                {e.title}

                                            </Title>

                                        </Wrap>

                                    </Link>
                                </SwiperSlide>
                            )


                        })


                    }








                </Swiper>




            </>
        )


    }

}


export default Tvcomponenet




const Wrap = styled.div`
padding: 50px;
display: flex;
align-items: flex-end;
width:100%;
margin: auto;
height:550px;
border-top: 1px solid grey;
border-bottom: 1px solid grey;
/* background-color: red; */
background: linear-gradient(10deg, rgba(0,0,0) 5%, rgba(0,0,0,0.2) 40%, rgba(19,2,2,0) 83%),${({ background }) => `url(https://image.tmdb.org/t/p/original/${background}) `}  ;
background-position:top center ;
background-repeat:no-repeat;
background-size:cover;



 @media  (max-width: 600px) {
    height:400px;
 }

 @media  (max-width: 400px) {
    height:220px;
    width: 100%;
    padding: 10px;
 }

`




const Title = styled.div`

color: white;
font-size: 80px;
max-width: 500px;
font-family: 'Big Shoulders Display', cursive;
padding-bottom: 20px;
font-weight: 500;

@media  (max-width: 600px) {
  font-size: 50px;
 }
 @media  (max-width: 400px) {
  font-size: 30px;
  max-width: 250px;
  
 }


`
