import styled,{css} from "styled-components"

export const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
    gap: 3rem;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 5rem;
    min-height: 59vh;
    padding-bottom: 2.5rem;

    @media (max-width: 550px){
        justify-content: center;
    }

`

export const StyledBackground = styled.div`

    background-color: #272B33;
    
    & > img{
    position: fixed;
    z-index: 0;
    opacity: .5;
    width: 40%;
    max-width: 600px;
    
    @media (max-width: 550px){
        width: 250px;
    }
    }

    & > img:nth-child(2){
        float: left;
        right: 30px;
        top: 60%;
    }



`

export const StyledError = styled.p`
    font-size: 6rem;
    color: white;

    @media (max-width: 1200px){
        font-size: 4rem;
    }

    @media (max-width: 700px){
        font-size: 3rem;
    }

    @media (max-width: 500px){
        font-size: 2rem;
    }
`

export const StyledPagination = styled.div`
    background-color: #272B33;

    div{
    padding-top: 3rem;
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5%;

    

        button{
            z-index: 1001;
            color: white;
            cursor: pointer;
            background: transparent;
            width: 241px;
            height: 44px;
            border-radius: 5px;
            border: 1px solid white;
            transition: .4s;

            &:hover{
                color: lightgreen;
                border: 1px solid lightgreen;
            }
        }

    }
`