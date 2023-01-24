import styled from "styled-components";

export const StyledSearch = styled.form`
    height: 40px;
    position: relative;
    background-color: #272B33;
    
    input{
        margin-left: 2rem;
        margin-top: 1rem;

        color: white;
        background: transparent;

        height: 80%;
        width: 300px;

        font-size: 1.4rem;
        
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

        button{
            display: hidden;
        }



    }
    label{
        margin-left: 30px;
        color: white;
        position: absolute;
        left: 0;
        font-size: 1.5rem;
        line-height: 1rem;
        transform-origin: 0 0;
        transition: transform 0.1s ease-in-out;

    }

    


`