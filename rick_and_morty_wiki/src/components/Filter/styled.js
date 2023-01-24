import styled from "styled-components";

export const StyledSearch = styled.div`
    height: 40px;
    position: relative;
    background-color: #272B33;
    
    input{
        margin-left: 2rem;
        margin-top: 1rem;

        color: white;
        background: transparent;

        height: 80%;
        width: 30%;
        
        outline: none;
        border: 0;
        border-bottom: 1px solid white;
        

        &:focus + label, &:not(:placeholder-shown) + label{
            transform: translateY(-1em) scale(.8);
            color: lightgreen;
        }

        @media(max-width:1250px){
            width: 250px;
        }



    }
    label{
        margin-left: 30px;
        color: white;
        position: absolute;
        left: 0;
        font-size: 3rem;
        line-height: 1rem;
        transform-origin: 0 0;
        transition: transform 0.1s ease-in-out;

        @media(max-width:1250px){
            font-size: 1.5rem;
        }
    }

    


`