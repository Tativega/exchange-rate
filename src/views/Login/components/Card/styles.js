import styled, { keyframes } from 'styled-components';

const CardsWrapper = styled.div`
background-color: #4d4d4d;
position: absolute;
top: 50%;
width: 50%;
height: 300px;
animation: ${({ active }) => active === "register" ? bounceLeft : bounceRight} 1s forwards;
border-radius: 8px;
padding: 20px;
@media (max-width: 425px) {
  animation: ${({ active }) => active === "register" ? bounceTop : bounceBottom} 1s forwards;
  top: 0;
  width: 250px;
  left: 100px;
}
`

const Card = styled.div`
flex-direction: column;
align-items: center;
`
const RegisterCard = styled(Card)`
display: ${({ isactive }) => !isactive ? 'none' : 'flex'};
`
const LoginCard = styled(Card)`
display: ${({ isactive }) => !isactive ? 'none' : 'flex'};
`
const Button = styled.button`
all: unset;
background-color: #f44336;
width: 40%;
border-radius: 5px;
padding: 5px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px
`
const RecoverButton = styled.h5`
cursor: pointer;
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

const bounceTop = keyframes`
  0% {
      transform: translate3d(-50%, 34%, 0)
    }
    

  100% {
      transform: translate3d(-50%, 0, 0)
    }
   
`
const bounceBottom = keyframes`
0% {
  transform: translate3d(-50%, 0, 0)
}


100% {
  transform: translate3d(-50%, 34%, 0)
}
   
`
export default { CardsWrapper, RegisterCard, LoginCard, Button, Input, RecoverButton }