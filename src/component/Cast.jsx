import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




const Cast = ({ data }) => {


    const profileurl = "https://image.tmdb.org/t/p/w185/"


    return (



        <Container>

            <h2>Main Cast</h2>

            <Wrapper>


                {
                    data.credits && data.credits.cast.slice(0, 7).map((e,i) => {


                        return (

                            <CastWrapper key={i} >

                                <Image>

                                    <LazyLoadImage effect='blur' src={`${profileurl}${ e && e.profile_path}`} alt="no image" />


                                </Image>




                                <h1>{e.name}</h1>
                            </CastWrapper>

                        )




                    })



                }


            </Wrapper>
        </Container>

    )
}



const Wrapper = styled.div`

display: flex;
justify-content: space-between;
flex-wrap: wrap;


@media  (max-width: 700px) {
  
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: center;

   }






`


const Image = styled.div`
width: 110px;
height: 110px;
overflow: hidden;
border-radius:80px;
margin-top: 40px;



@media  (max-width: 450px) {
    width: 80px;
height: 80px;
   }








img{

width: 100%;
height: 100%;
object-fit: cover;
object-position: 0px -20px;
}


`







const CastWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;


h1{
    margin-top: 10px;
    text-align: center;
font-size: 13px;
color: white;




}




`







const Container = styled.div`
width: 90%;
min-height: 200px;
margin: auto;
background-color: rgba(200,200,200,0.2);
border-radius: 40px;
padding: 50px;


@media  (max-width: 450px) {
    padding: 20px 20px 20px 20px;
    width: 95%;
   }



h2{
color: white;
margin-left: 20px;





}




`


export default Cast