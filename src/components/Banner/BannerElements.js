import styled from 'styled-components'

export const BannerContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 885px;
position: relative;
z-index: 1;

`;

export const BannerBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`;

export const BannerContent = styled.div`
z-index: 3;
max-width: 1200px;
bottom: 30px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const BannerH1 = styled.h1`
color: black;
font-size: 80px;
text-align: center;
font-family: 'Poppins', sans-serif;
font-weight: 900;
letter-spacing: 5px;

@media screen and (max-width: 768px){
    font-size: 40px;

}

@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

export const BannerP = styled.p`
margin-top: 0px;
margin-bottom: 0px;
color: gray;
font-size: 40px;
text-align: center;
max-width: 600px;
font-family: 'Poppins', sans-serif;
font-weight: 400;

@media screen and (max-width: 768px){
    font-size: 24px;

}

@media screen and (max-width: 480px){
    font-size: 18px;
}

`;
export const BannerBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;
