import React, {useState}  from "react"
import axios from "axios"
import styled from "styled-components"

const ContainImage =styled.div`
border:solid #EB7AB0;
width:50vw;
height:60vh;
border-radius:50%;
margin-left:35vw;
margin-top:5vh;
img{
  width:100%;
  height:100%;
  border-radius:50%;
}
`
const Button = styled.button`
width:15vw;
height:10vh;
position:relative;
top:35vh;
left:10vw;
font-size:3vw;
background-color:#EB7AB0;
border:none;
border-radius:10px;
color:white;

&:hover{
  cursor:pointer;
  background-color:#F2ADD5;
  transition:background-color 1s;
  color:#EB7AB0;
  transition:color 1s;
}
`
const T1 = styled.h1`
height:10vh;
font-size:3vw;
display:flex;
align-items:center;
justify-content:center;
background-color:#EB7AB0;
color:white;
` 

export default function App(){
   const [Dog , setDog ] = useState()

   function apiDog(){
     axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
      //  console.log(response.data.message)
       setDog(response.data.message)
     } )
   }
  return(
    <>
      <T1>Melhore seu dia!!!</T1>
      <Button onClick={()=>(apiDog())}>*click*</Button>
      <ContainImage><img src={Dog} alt=""/></ContainImage>
      
    </>
  )
}