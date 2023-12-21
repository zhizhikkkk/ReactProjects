import styled,{createGlobalStyle} from "styled-components";
import BGImage from  './images/Background.jpg'

export const GlobalStyle  = createGlobalStyle`
  html{
    height:100%
  }
  body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding:0 20px;
    display :flex;
    justify-content: center;
  }
  *{
    box-sizing: border-box;
    font-family: 'Rubik Doodle Shadow', sans-serif;
  }
`

export const Wrapper =styled.div`
  display: flex;
  flex-direction: column;
  align-items:center ;
  
  >p{
    color: black;
  }
  .score{
    color:black;
    font-size:2rem;
  }
  h1{
    background-image:linear-gradient(180deg,#GGG,#87G1GG);
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip:text;
    --webkit-text-fill-color:transparent;
    --moz-background-clip:text;
    --moz-text-fill-color:transparent;
    filter:drop-shadow(2px 2px gray);
    font-size: 70px;
    text-align: center;
    margin:20px;
  }
  
  .start,
  .next{
    cursor:pointer;
    border:2px solid black;
    box-shadow:0px 5px 10px gray;
    border-radius: 15px;
    height:40px;
    margin:20px 5px;
  }
`