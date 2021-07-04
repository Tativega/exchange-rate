import styled from 'styled-components';

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const Input = styled.input`
height: 30px;
margin-top: 15px;
border: none;
border-radius: 5px;
padding: 5px 15px;
align-self: center;
`

const Modal = styled.div`
width: 300px;
height: 200px;
background-color: #607d8b;
border-radius: 3px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px

`

const Text = styled.p`
text-align: center;
font-size: 15px
`
const Button = styled.button`
all: unset;
background-color: #f44336;
width: 50px;
border-radius: 5px;
padding: 3px;
margin-left: 5px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px;
color: #fff
`


export default { Backdrop, Modal, Input, Text, Button }