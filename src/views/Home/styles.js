import styled from 'styled-components';

const VideoWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
overflow: hidden;
`

const MainContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
`

const Data = styled.h1`
color: #fff;
z-index: 10
`

export default { VideoWrapper, MainContent, Data };