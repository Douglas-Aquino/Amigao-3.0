import React from "react"
import Amigao from "./Component/Amigao"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;

  body{
    background-color:#FCD0E9;
  }
}
`

export default class extends React.Component{
  render(){
    return(
      <>
      <GlobalStyle/>
      <Amigao/>
      </>
    )
  }
}