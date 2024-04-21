import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from 'react-router-dom';



const Genre = () => {


    const [data, ddata] = useState([])


    useEffect(() => {

        axios.get(` https://api.themoviedb.org/3/genre/movie/list?api_key=788d2dc1d093d3a3ea97e0ab0df1d20a&language=en-US`).then((d) => {

            ddata(d.data)


        })






    }, [])






    return (


        <Container>
            <Wrapper>

                <Swiper


                    className="mySwiper"

                    breakpoints={{

                        950: {
                            slidesPerView: 7,
                            spaceBetween: 30,
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },

                        200: {
                            slidesPerView: 3,
                            spaceBetween: 70,
                        }

                    }}
                >

                    {


                        data.genres && data.genres.map((e) => {

                            return (

                                


                                <SwiperSlide key={`${e.id}`} >

                                    <Link to={`/genre?g=${e.name}&id=${e.id}`}>
                                        <h1     style={{ color: "white" }}   >{e.name}</h1>
                                    </Link>
                                </SwiperSlide>





                            )




                        })

                    }


                </Swiper>
            </Wrapper>


        </Container>
    )
}






const Container = styled.div`
width: 100%;
background-color: black;
margin-top: 30px;
`


const Wrapper = styled.div`

width: 90%;
margin: auto;

@media  (max-width: 600px) {
    width: 95%;

}

.activeclass{

    border: 2px solid red;


}


h1{
cursor: pointer;
border: 2px solid grey;
border-radius: 30px;
text-align: center;
font-size: 15px;
padding: 7px;
width: 100px;
font-family: 'Big Shoulders Display', cursive;

@media  (max-width: 600px) {
    font-size: 11px;
    width: 90px;
    padding: 8px 0px 8px 0px;

}






}

.mySwiper{

padding: 5px 100px 10px 0px ;

}

`

export default Genre
