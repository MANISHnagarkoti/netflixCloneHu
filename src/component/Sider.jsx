import { useEffect, useState } from 'react'
import styled from "styled-components"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules


// import required modules
import { FreeMode } from "swiper";










const Slider = ({ tagline, type }) => {

    const [data, ddata] = useState([])


    const baseurl = "https://image.tmdb.org/t/p/w342/"

    const woke = async () => {

        const data = await axios.get(`${type}`)





        ddata(data.data.results)


    }

    useEffect(() => {


      


        woke()

    }, [type])








    return (

        <>

            <Container>




                <h4>{tagline}</h4>

                <Swiper

                    freeMode={true}
                    className="mySwiper"
                    modules={[FreeMode]}
                    breakpoints={{

                        950: {
                            slidesPerView: 6,
                            spaceBetween: 0,
                        },
                        800: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },

                        200: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        }

                    }}
                >





                    {

                        data.map((i) => {

                            return (



                                <SwiperSlide key={i.id} >





                                    <Link to={`/${i.id} `}  >


                                        <Wrap >

                                            <LazyLoadImage

                                                // effect="blur"
                                                width={160}
                                                height={240}
                                                alt="No Image"
                                                src={`${baseurl}${i.poster_path}`}
                                            />



                                        </Wrap>

                                        <Name>{i.original_name || i.title}</Name>

                                    </Link>



                                </SwiperSlide>







                            )


                        })

                    }
                </Swiper>





            </Container>



        </>
    )
}






export default Slider 




const Container = styled.div`

margin: auto;
margin-top: 25px;
width: 90%;


.siderhead{
display: flex;
justify-content: space-between;
align-items: flex-end;

h3{
    color: grey;
}

}


.name{
padding: 5px 10px 0px 5px;
    color: white;
    margin-top: 5px;

    @media  (max-width: 500px) {
 

display: none;


}



}



@media  (max-width: 500px) {
 

    width: 95%;


  }
  






.mySwiper{

padding: 40px 70px 20px 20px ;


@media  (max-width: 500px) {
    margin-top: 30px;
    padding: 0px 70px 20px 10px ;
  }
  

}



h4{
color: white;
font-size: 23px;
position: relative;
font-weight: 200;


&:after{
content: '';
position: absolute;
width: 50px;
height: 1px;
background-color:#cd2727;
bottom: -8px;
left: 0px;
border-radius: 22px;
}




@media  (max-width: 500px) {
 

 font-size: 19px;


  }
  



}


`




const Wrap = styled.div`

width: 160px;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;
border-radius: 12px;
transition: all 0.2s;
z-index: 999;
position: relative;
transition: 0.4s;
height:240px ;

.ss{
@media  (max-width: 450px) {
 

 width:110px ;
 height: 170px;
 }
 
}

img{
    transition: 0.4s;


 @media  (max-width: 450px) {
 

 width:110px ;
 height: 170px;
 }
 
 &:hover{

 transform: scale(1.07);

 }



}





@media  (max-width: 450px) {
 

width:110px ;
height: 170px;
}




`




const Name = styled.div`


font-size: 13px;
color:#d2d2d6;
margin-top: 11px;
width: 160px;
font-weight: 400;

@media  (max-width: 450px) {
 

 width:110px ;
 font-size: 12px;
 }
 
 
`




















