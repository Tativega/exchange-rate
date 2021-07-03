import styled, { keyframes } from 'styled-components';


const MainContainer = styled.div`
background-color: #212529;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

const FormContainer = styled.div`
background-color: #28363a;
display: flex;
position: relative;
width: 500px;
height: 200px;
justify-content: space-between;
align-items: center;
`
const Register = styled.div``
const Login = styled.div``

const CardsWrapper = styled.div`
background-color: #28363a;
position: absolute;
top: 60%;
width: 50%;
animation: ${({ active }) => active === "register" ? bounceLeft : bounceRight} 1s forwards;
`
const RegisterCard = styled.div`
display: ${({ isactive }) => !isactive ? 'none' : 'flex'};
flex-direction: column;
`
const LoginCard = styled.div`
display: ${({ isactive }) => !isactive ? 'none' : 'flex'};
flex-direction: column;

`
// const Register = styled.div``

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

export default { MainContainer, FormContainer, Register, Login, CardsWrapper, RegisterCard, LoginCard }