import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll'

export const Button = styled(LinkS)`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#01bf71' : '#d52d17')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 50px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#010606' : '#ffff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
font-family: 'Poppins', 'Sans-serif';
font-weight: 900;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#52d17' : 'gray')};
}
`;