import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Container = styled.div`

width: 380px;
overflow: hidden;
border-radius: 20px;
margin-top: 30px;
transition: 0.3s;
height: 330px;
cursor: pointer;



@media  (max-width: 450px) {
    
    width: 340px;
    height: 290px;
 }
 

h2{
    font-family: 'Big Shoulders Display', cursive;
    font-weight: 400;
font-size: 18px;

    @media  (max-width: 450px) {
    
    font-size: 13px;
 }

}


 img{


 width: 100%;

    @media  (max-width: 450px) {
    
    height: 190px;
 
 }
 
 

}




`

const Tag = styled.p`
color: grey;
font-size: 15px;
font-weight: 400;
font-family: 'Big Shoulders Display', cursive;
@media  (max-width: 880px) {
   
}


`

const Info = styled.div`
display: flex;
width: 45%;
margin-top: 10px;
justify-content: space-between;
font-size: 11px;
align-items: center;
`




const Genremovies = ({ data }) => {

    const baseurl = "https://image.tmdb.org/t/p/w780/"


    return (
        <>
            <Container>


                <img

                    alt='iMAGES'
                    src={`${baseurl}${data.backdrop_path}`}



                />





                <h2 style={{ color: "white", marginTop: "5px" }}>{data.title || data.original_name}</h2>

                <Tag style={{ color: "grey", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", marginTop: "5px" }}> {data.overview}  </Tag>

                <Info className='info'>

                    <Tag> {data.release_date} </Tag>


                    <ThumbUpOutlinedIcon style={{ color: "white", fontSize: "14px", marginLeft: "40px" }} />


                    <Tag> {data.vote_count} </Tag>


                </Info>


            </Container>




        </>
    )
}

export default Genremovies
