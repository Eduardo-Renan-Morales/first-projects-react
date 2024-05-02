import styled from "styled-components";

export const Button = styled.button`

    width: 342px;
    height: 74px;
    margin-top: 130px;

    background: ${props => props.isButton ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    border: ${props => props.isButton ? '1px solid white' : 'none'};

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

&:hover{
    
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

img{
    transform: ${props => props.isButton && 'rotateY(180deg)'} ;   
}

`;

