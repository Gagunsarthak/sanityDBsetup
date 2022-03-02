import styled from "styled-components"
import Dashboard from "./api/dashboard"
export default function Home() {
  return  (  <wrapper>
    
    <Dashboard></Dashboard>
    
    <WalletConnect>
    <Button>Configurations</Button>
    </WalletConnect>
    
  </wrapper>)
  
}
const wrapper=styled.div`
display:flex;
height:100vh;
max-width:100vw;
background-color:#0a0b0d;
color:white;
display:grid;
place-items:center;

`
const WalletConnect = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Button=styled.div`
border:1px solid blue;
padding:0.8rem;
font-size:1.3rem;
font-weight:500;
border-radius:0.4rem;
background-color:#3773f5;
color:#000;
&:hover{
  cursor:pointer;
}
`
