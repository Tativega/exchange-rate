import styled, { keyframes } from 'styled-components';


const MainContainer = styled.div`
background-color: #212529;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
>* {
    color: #fff
}
`
const Logo = styled.div`
background:no-repeat center url("ortex_logo.png");
width: 300px;
height: 50px;
position: absolute;
top: 50px;
`

const FormContainer = styled.div`
background-color: #28363a;
display: flex;
position: relative;
width: 500px;
height: 200px;
justify-content: space-between;
align-items: center;
border-radius: 8px;
`
const Register = styled.div`
cursor: pointer;
padding: 10px 0 10px 100px
`
const Login = styled.div`
cursor: pointer;
padding: 40px;
padding: 10px 100px 10px 0;
`

const CardsWrapper = styled.div`
background-color: #4d4d4d;
position: absolute;
top: 50%;
width: 50%;
height: 300px;
animation: ${({ active }) => active === "register" ? bounceLeft : bounceRight} 1s forwards;
border-radius: 8px;
padding: 20px
`

const Card = styled.div`
display: ${({ isactive }) => !isactive ? 'none' : 'flex'};
flex-direction: column;
align-items: center;
`
const RegisterCard = styled(Card)`
display: ${({ isactive }) => !isactive ? 'none' : 'flex'};
`
const LoginCard = styled(Card)`
display: ${({ isactive }) => !isactive ? 'none' : 'flex'};
`
const Button = styled.div`
background-color: #f44336;
width: 40%;
border-radius: 5px;
padding: 5px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px
`

const Input = styled.input`
height: 30px;
margin-top: 15px;
border: none;
border-radius: 5px;
padding: 5px 15px
`

const bounceLeft = keyframes`
0% {
    transform: translate3d(100%, -50%, 0)
}

50% {
    transform: translate3d(-30px, -50%, 0)
}

100% {
    transform: translate3d(0, -50%, 0)
}
`

const bounceRight = keyframes`
  0% {
      transform: translate3d(0, -50%, 0)
    }
    

  50% {
      transform: translate3d(calc(250px + 30px), -50%, 0)
    }
    

  100% {
      transform: translate3d(100%, -50%, 0)
    }
   
`

export default { MainContainer, FormContainer, Register, Login, CardsWrapper, RegisterCard, LoginCard, Button, Input, Logo }