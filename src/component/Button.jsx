import React from 'react'
import styled from 'styled-components'
import PlayCircleFilledWhiteOutlined from '@mui/icons-material/PlayCircleFilledWhiteOutlined';


const Button = ({ data }) => {
    return (
        <div>
            <Container>


                <div className='tagline'>{data} </div> < PlayCircleFilledWhiteOutlined style={{color:"white"}} />

            </Container>


        </div>
    )
}


const Container = styled.div`
margin-top: 30px;
background-color: red;
width: 140px;
height: 50px;
border-radius: 40px;
display: flex;
padding: 10px;
justify-content: space-around;
align-items: center;
font-size: 16px;
transition:all 0.3s;
cursor: pointer;




.tagline{

    color: white;
    font-weight: 400;
}


&:hover{

transform: scale(1.04);


}

`

export default Button


