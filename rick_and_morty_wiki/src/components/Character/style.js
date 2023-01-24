import styled from "styled-components";

export const StyledCharacter = styled.li`

    width: 30%;
    color: white;
    background: rgb(60, 62, 68);
    border: 2px transparent;
    border-radius: 0.5rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
    cursor: pointer;
    z-index: 1;
    transition: .4s;
    overflow: hidden;

    @media (max-width: 1100px){
        width: 45%;
    }

    @media (max-width: 550px){
        width: 80%;
    }

    &:hover{
        border: 2px solid orange;
        transform: scale(1.1);
    }

    img{
        width: 100%;
        height: 70%;
    }

    h2{
       padding-top: 1rem;
    }


`