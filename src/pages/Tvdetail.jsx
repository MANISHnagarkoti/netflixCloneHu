import React from 'react'
import styled from "styled-components"
import Button from "../component/Button"
import { useParams } from "react-router"
import { useState } from "react"
import { useEffect } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from "axios"
import Cast from "../component/Cast"
import Seasoncomponent from '../component/Seasoncomponent'






const Tvdetail = () => {

    const { tv_id } = useParams()


    const [data, ddata] = useState({})

  
    
  
  
    const posterkurl = "https://image.tmdb.org/t/p/w342/"
  
  
  
  
    useEffect(() => {
  
      axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=788d2dc1d093d3a3ea97e0ab0df1d20a&append_to_response=videos,credits`).then((d) => {
  
        ddata(d.data)
  
      })
  
  
  

  
  
  
      top()
  
  
  
  
    }, [tv_id])
  
  
  
  
  
  
    function top() {
  
      window.scrollTo(0, 0)
  
  
    }
  
  
  
  
    // {{{{{{{{{{{{{{{{{{Genre slice}}}}}}}}}}}}}}}}}}
  
  
    let newGenredata = ""
  
  
  
  
    data.genres && data.genres.forEach((e) => {
  
  
      newGenredata = newGenredata + ` ${e.name} /`
  
    })
  
  
  
  
  
    const genre = newGenredata.slice(0, newGenredata.length - 1)
  
  
  
  

  
  
  
  
    // {{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}
  
  
  
  
  
  
  
  
  



  return (
    <>
    


    <Wrapper>



      <DisplayDetails background={data.backdrop_path && data.backdrop_path} >


        <Blur> </Blur>

        <Infowrapper>


          <Photodetails > <div className="wrap"> <LazyLoadImage effect="blur" src={`${posterkurl}${data.poster_path && data.poster_path}`} width={250} height={380} alt="" />  </div> </Photodetails>


          <TextDetails>

            <h1>{data.name}</h1>




            <div className="extra_detail">



              <div className="runtime">  <span className="n">Episode run time :</span>   {`${data.episode_run_time} minutes ` || "No"} </div>




              <div className="genre">      <span className="n">Genre :</span>  {genre || "not available"}     </div>







              <div className="release_date">       <span className="n">First air date :</span>        {data.first_air_date}</div>




            </div>







            <div className="overview"> {data.overview}  </div>



            <Buttondetails > <Button data={"Watch Now"} /> </Buttondetails>




          </TextDetails>

        </Infowrapper >


      </DisplayDetails >


      {/* {{{{{{{{{{{{{{{{{{{{{{{Cast }}}}}}}}}}}}}}}}}}}}}}} */}


      <Seasoncomponent data={data}/>

      <Cast data={data} />






      {/* {{{{{{{{{{{{{{{{{{{{{{{Youtube}}}}}}}}}}}}}}}}}}}}}}} */}




      {

        data.videos && data.videos.results.slice(0, 1).map((e) => {


          return (

            <Trailer key={e.name}>


              <div className='tagline'> <h2>{e.name}</h2>  </div>


              <iframe width="80%" height="100%"

                src={`https://www.youtube-nocookie.com/embed/${e.key}`}

                title="YouTube video player"


                frameBorder="0"


                allowFullScreen></iframe>

            </Trailer>





          )

        })

      }




      {/* {{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}} */}

      


    </Wrapper>














        
  
    </>
  )
}





const Wrapper = styled.div`
position: relative;
margin: auto;
max-width: 1420px;
`



const Trailer = styled.div`

overflow:hidden;
width:100%;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(20,20,20);
margin-top: 60px;
margin-bottom: 70px;

iframe{
margin-top: 30px;
border-radius: 11px;
border: 1px solid grey;

  @media  (max-width: 860px) {
  width: 100%;
  margin-top: 10px;

   }



  
}


@media  (max-width: 860px) {
  height: 300px;
  margin-top: 40px;

   }


.tagline{


  width: 80%;

  @media  (max-width: 860px) {
width: 95%;
   }


}


h2{
  text-align: left;
  font-size: 33px;
color: white;
font-weight:300 ;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

@media  (max-width: 860px) {
  font-size: 17px;
   }





}




`










// {{{{{{{{{{{{{{{{{{{{styled componenet}}}}}}}}}}}}}}}}}}}}

const DisplayDetails = styled.div`

margin-top: 60px;
position: relative;
z-index: 1;
display: flex;
align-items: center;
min-height:calc(90vh - 60px) ;
background:linear-gradient(0deg,  rgba(20,20,20) 50%,  rgba(0,0,0,0.2) 90%) ,  ${({ background }) => `url(https://image.tmdb.org/t/p/w1280/${background}) `} ;
background-position:center;
background-size:cover;
justify-content:center;

`


const Buttondetails = styled.div`
z-index: 999;
`


const Infowrapper = styled.div`
margin-top: 50px;
z-index:999;
display: flex;
max-width:850px ;


@media  (max-width: 860px) {
 
display: block;
  }
  
`


const Blur = styled.div`
z-index: 999;
position: absolute;
width: 100%;
height: 100%;
backdrop-filter: blur(3px);
top: 0px;
left: 0px;
`







const Photodetails = styled.div`
z-index: 999;
display: flex;
justify-content: flex-end;




 @media  (max-width: 860px) {
 
  justify-content:center;
  margin-top: 50px;
 }
 




.wrap{
overflow: hidden;
border-radius: 20px;
height: 380px;
width: 250px;





@media  (max-width: 400px) {
 
 width: 200px;
height: 300px;
}


img{



@media  (max-width: 400px) {
 
  width: 200px;
height: 300px;
}



}



}

`





const TextDetails = styled.div`
padding-left: 100px;
z-index: 999;
text-align: left;
@media  (max-width: 860px) {
 
  margin: auto;
width: 90%;
padding-top: 50px;
padding-left: 0px;
padding-bottom: 50px;
}
@media  (max-width: 480px) {
  margin: auto;
width: 95%;

 }
 
h1{
margin-top: 0px;
color: white;
font-size:50px;
font-weight:600;
font-family: 'Big Shoulders Display', cursive;
@media  (max-width: 400px) {
 
 font-size: 35px;
}
}



.extra_detail{
  display: flex;
margin-top: 10px;
flex-direction: column;

.n{

padding-right: 10px;
color:grey;

}


  .iconwrapper{
    display: flex;
    align-items:center ;
    width: 120px;
    justify-content: space-around;


    .icon{
     color: white;
     }
 
  }




}







.overview{
  color: white;
font-size: 15px;
line-height: 20px;
margin-top: 10px;
font-weight: 400;
color: grey;


}



.runtime{
color: white;
font-size: 15px;




}




.genre{
color: white;
display: flex;
margin-top: 5px;
font-size: 15px;




}




.release_date{
  margin-top: 6px;
  color: white;
  font-size: 15px;
}
`












export default Tvdetail
