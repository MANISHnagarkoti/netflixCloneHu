
import styled from "styled-components"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Header = () => {

  const [open, oopen] = useState(false)




  return (
    <>
      <Container>


        <Wrapper>

          <NavLink to="/"> <LazyLoadImage  width={40}  alt="bachaoooo" height={35} src='images/logo.png' /> </NavLink>




          <NavMenu>

            <NavLink to="/">    <Homeicon />   </NavLink>

            <span onClick={() => oopen(true)} >  <Searchicon />  </span>



          </NavMenu>


          {/* {{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}} */}

          {

            open ? <Search open={oopen} /> : null


          }


        </Wrapper>

      </Container>







    </>

  )
}






// {{{{{{{{{{{{{{{header css}}}}}}}}}}}}}}}


const Wrapper = styled.div`
width: 95%;
height: 100%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;

@media  (max-width: 480px) {
 
  width: 95%;

}

`







const Container = styled.div`
position: fixed;
top: 0px;
left: 0px;
right: 0px;
width: 100%;
height: 50px;
background-color: black;

z-index: 999;






`




// {{{{{{{{{{{{{{{{{{icon}}}}}}}}}}}}}}}}}}


const Searchicon = styled(SearchRoundedIcon)`
font-size: 25px;
color: white;
cursor: pointer;
transition: 0.4s;



&:hover{
transform: scale(1.07);
color: red;
}


`
const Homeicon = styled(HomeOutlinedIcon)`
font-size: 25px;
transition: 0.4s;



&:hover{
transform: scale(1.07);
color: red;
}

@media  (max-width: 480px) {



}


`








const NavMenu = styled.div`

padding-right: 10px;


a{

cursor: pointer;
color: white;
margin: 0px 20px 0px 20px;
position: relative;



@media  (max-width: 480px) {

margin: 0px 25px 0px 25px;

}


}










`






export default Header
