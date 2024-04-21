import { useState } from 'react'
import styled from 'styled-components'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import CloseIcon from '@mui/icons-material/Close';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';





const Search = ({ open }) => {

    const [type, ttype] = useState("")
    const [searchdata, ssearchdata] = useState([])
    const [emptyerror, eemptyerror] = useState(false)
    const [welcome, wwelcome] = useState(true)



    async function data(moviename) {



        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=788d2dc1d093d3a3ea97e0ab0df1d20a&language=en-US&query=${moviename}&page=1&include_adult=false`).then((d) => {


            ssearchdata(d.data.results)


            console.log(d)


        })






    }











    const submit = (e) => {
        e.preventDefault()
        eemptyerror(false)
        wwelcome(false)


        if (type === "") {

            eemptyerror(true)
            wwelcome(false)


        }




        data(type)


    }



    const baseurl = "https://image.tmdb.org/t/p/w185/"

    return (
        <>


            <Searchcomponenet>


                <Searchwrapper>





                    <Inputwrapper>  <form onSubmit={submit}>   <Input value={type} onChange={(e) => ttype(e.target.value)} placeholder='Search movie from here...' type="text" />     <button type="submit">   <Searchicon />     </button>     </form>      </Inputwrapper>


                    <Cross onClick={() => open(false)} />





                    {emptyerror ? <div className='extra' >Please type movie name</div> : null}

                    {welcome ? <div className='extra'  >Result shown here</div> : null}








                    <Resultswrapper>





                        {


                            searchdata.map((e) => {

                                return (

                                    <Link to={`/${e.id}`}>
                                        < Searchmoviewrapper key={e.id} onClick={() => open(false)} >



                                            <LazyLoadImage effect='blur' width={120} height={170} src={`${baseurl}${e.poster_path}`} alt="no image" />

                                            <div className='detail'>

                                                <div className='name'>  {`Title :  ${e.title}`} </div>

                                                <div className='date'>  {`Release date :  ${e.release_date}`} </div>

                                                <div className='lan'>  {`Original language : ${e.original_language}`} </div>


                                            </div>






                                        </Searchmoviewrapper>

                                    </Link>
                                )

                            })













                        }

                    </Resultswrapper>






                </Searchwrapper>

            </Searchcomponenet>

        </>

    )
}




const Cross = styled(CloseOutlinedIcon)`

position: absolute;
top: 25px;
right: 25px;
cursor: pointer;

@media  (max-width: 600px) {
 
    top: 15px;
right: 15px;

}


`


const Searchcomponenet = styled.div`
width: 100%;
height:80vh;
background-color: white;
position: absolute;
top: 50px;
left: 0px;
z-index: 99;
border-radius: 0px 0px 20px 20px ;
background-color: rgba(50,50,50,0.6);
backdrop-filter: blur(40px);
overflow: hidden;

`






const Searchwrapper = styled.div`
color: white;
width: 100%;
margin: auto;
width: 90%;

.extra{
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
    font-size: 33px;
 font-weight: 400;
 color: grey;
 font-family: 'Big Shoulders Display', cursive;
}

`

const Input = styled.input`
border: none;
width: 100%;
border-radius: 40px;
font-size: 20px;
height: 100%;
background-color: transparent ;
color: white;


@media  (max-width: 500px) {
 

    font-size: 13px;

}

`




const Inputwrapper = styled.div`
padding: 0px 40px 0px 40px;
display: flex;
justify-content: space-between;
width: 60%;
margin: auto;
margin-top: 50px;
background-color: rgba(255, 255, 255, 0.166);
border-radius: 40px;
height: 60px;
align-items: center;

form{


width: 100%;
display: flex;
justify-content: space-between;
width: 100%;
margin: auto;
border-radius: 40px;
height: 60px;
align-items: center;


@media  (max-width: 600px) {
 
 height: 45px;



}


button{
background: none;
border: none;
}

}

@media  (max-width: 600px) {
 
    height: 45px;
    padding: 0px 20px 0px 20px;

    width: 80%;
}

`


const Searchicon = styled(SearchRoundedIcon)`
font-size: 30px;
color: white;
transition: 0.3s;
cursor: pointer;


@media  (max-width: 500px) {
 

 font-size: 25px;

}



&:hover{

transform: scale(1.07);

}

`


const Searchmoviewrapper = styled.div`


display: flex;
justify-content: space-between;
background-color: rgba(0,0,0,0.3);



@media  (max-width: 380px) {
 
height: 140px;

}







.detail{
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
font-size: 20px;
color: grey;
font-weight: 600;
line-height: 30px;
padding-right: 10px;



@media  (max-width: 380px) {
 

    line-height: 41px;
    width: 60%;

}




@media  (max-width: 900px) {
 

    line-height: 25px;
}

@media  (max-width: 380px) {
 

 line-height: 20px;

}


.name{
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    margin-top: 17px;
    color: white;




    @media  (max-width: 900px) {
 

        font-size: 15px;


}

@media  (max-width: 800px) {
 

 font-size: 22px;
 
 }
 
 @media  (max-width: 380px) {
 

 font-size: 15px;
 
 }
 


}




.date{

    font-size: 15px;
text-align: left;


@media  (max-width: 900px) {
 

 font-size: 12px;

margin-top: 4px;
}

}







.lan{

font-size: 15px;
text-align: left;


@media  (max-width: 900px) {
 

 font-size: 12px;


}



}



}







img{



    @media  (max-width: 380px) {
 

 width: 100px ;
 height: 140px;


}



}


`



const Resultswrapper = styled.div`
min-height: 30vh;
max-height: 55vh;
overflow-y: scroll;
margin-top: 50px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;









@media  (max-width: 800px) {
 

    grid-template-columns: 1fr ;

}


`


export default Search
