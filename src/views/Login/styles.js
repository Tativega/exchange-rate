import styled from 'styled-components';


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
@media (max-width: 425px) {
    width: 200px;
    height: 400px;
    flex-direction: column;
    margin: 0 auto;
}
`
const Register = styled.div`
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 0 10px 80px;
flex-direction: column;
span {
    text-align: center;
    font-size: 12px;
}
@media (max-width: 425px) {
   padding: 15px;   
}
`
const Login = styled.div`
cursor: pointer;
padding: 10px 75px 10px 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    span {
        text-align: center;
        font-size: 12px;
    }
@media (max-width: 425px) {
    padding: 15px;
    
 }
`
// eslint-disable-next-line
export default { MainContainer, FormContainer, Register, Login, Logo }