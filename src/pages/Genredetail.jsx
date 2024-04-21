import axios from 'axios'
import { useEffect } from 'react'
import React from 'react'
import { useLocation } from 'react-router'
import { useState } from 'react'
import queryString from "query-string"
import styled from 'styled-components'
import Genre from '../component/Genre'
import Herosec from '../component/Herosec'
import Genremovies from '../component/Genremovies'
import { Link } from 'react-router-dom'


const Genredetail = () => {


    const { search } = useLocation()
    const { g, id } = queryString.parse(search)
    const [load, lload] = useState(true)

    const [data, ddata] = useState([])


    useEffect(() => {

        lload(true)
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=788d2dc1d093d3a3ea97e0ab0df1d20a&with_genres=${id}`).then((d) => {

            ddata(d.data.results)


        })


        lload(false)

    }, [id])




    if (load) {

      return  <LoadingWrapper></LoadingWrapper>
    }











    return (
        <>

            <Container>
                <Genre />
                <Herosec tagline={g} />


                <Wrapper>

                    {
                        data.map((e, i) => {


                            return (
                                <Link to={`/${e.id}`} key={i}>
                                    <Genremovies data={e} />
                                </Link>
                            )


                        })
                    }





                </Wrapper>









            </Container>

        </>
    )
}




const LoadingWrapper = styled.div`

height: 100vh;


`












const Container = styled.div`
margin: auto;
margin-top: 50px;
width: 100%;
max-width: 1420px;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
margin: auto;
justify-items: center;
margin-top: 20px;


@media  (max-width: 1174px) {
 
    grid-template-columns: 1fr 1fr  ;
 
}



@media  (max-width: 850px) {
    
    grid-template-columns: 1fr   ;

}



`



export default Genredetail