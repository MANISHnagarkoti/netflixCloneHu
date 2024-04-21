import styled from "styled-components"
import Button from "../component/Button"
import { useParams } from "react-router"
import { useState } from "react"
import { useEffect } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Sider from "../component/Sider"
import axios from "axios"
import Cast from "../component/Cast"




const Moviedetail = () => {

  const { movie_id } = useParams()


  const [data, ddata] = useState({})
  const [s, ss] = useState(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=788d2dc1d093d3a3ea97e0ab0df1d20a&language=en-US`)




  const posterkurl = "https://image.tmdb.org/t/p/w342/"




  useEffect(() => {



    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=788d2dc1d093d3a3ea97e0ab0df1d20a&append_to_response=videos,credits`).then((d) => {

      ddata(d.data)

    }).then(() => ss(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=788d2dc1d093d3a3ea97e0ab0df1d20a&language=en-US`)).then(() => top())








  }, [movie_id])






  function top() {

    window.scrollTo(0, 0)


  }


  // {{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}

  const ge = data.genres && data.genres.reduce((accu, arr) => {


    accu.push(arr.name)


    return accu

  }, [])


  const dd = ge && ge.join(" / ")




  // {{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}






  





  return (




    <Wrapper>



      <DisplayDetails background={data.backdrop_path && data.backdrop_path} >


        <Blur> </Blur>

        <Infowrapper>


          <Photodetails > <div className="wrap"> <LazyLoadImage effect="blur" src={`${posterkurl}${data.poster_path && data.poster_path}`} width={250} height={380} alt="" />  </div> </Photodetails>


          <TextDetails>

            <h1>{data.title}</h1>




            <div className="extra_detail">



              <div className="runtime">  <span className="n">Time :</span>   {`${data.runtime} minutes `} </div>




              <div className="genre">      <span className="n">Genre :</span> {dd}    </div>







              <div className="release_date">       <span className="n">Release Date :</span>        {data.release_date}</div>




            </div>







            <div className="overview"> {data.overview}  </div>



            <Buttondetails > <Button data={"Watch Now"} /> </Buttondetails>




          </TextDetails>

        </Infowrapper >


      </DisplayDetails >


      {/* {{{{{{{{{{{{{{{{{{{{{{{Cast }}}}}}}}}}}}}}}}}}}}}}} */}




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

      <Sider type={s} tagline={"Similiar Movies"} />


    </Wrapper>


  )
}







// {{{{{{{{{{{{{{{youtube styled css}}}}}}}}}}}}}}}


const Wrapper = styled.div`
position: relative;
margin: auto;
max-width: 1480px;
min-height: 100vh;
`



const Trailer = styled.div`

overflow:hidden;
width:100%;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(0,0,0);
margin-top: 150px;
margin-bottom: 100px;

iframe{
margin-top: 30px;
border-radius: 11px;


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

margin-top: 50px;
position: relative;
z-index: 1;
display: flex;
align-items: center;
min-height:calc(90vh - 60px) ;
background:linear-gradient(0deg,  rgba(0,0,0) 50%,  rgba(0,0,0,0.1) 90%) ,  ${({ background }) => `url(https://image.tmdb.org/t/p/w1280/${background}) `} ;
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



export default Moviedetail
