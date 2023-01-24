import styled,{css} from "styled-components"

export const StyledModal = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    height: 100vh;
    z-index: 1002;

    .overlay{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 20px;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content{
        background-color: white;
        height: 40%;
        width: 100%;
        max-width: 700px;
        position: relative;
        display: flex;
        

        div{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            background-color: aliceblue;
            padding-left: 1rem;

            h2{
                margin-top: 1rem;
                margin-right: 2rem;
                text-align: center;
                font-size: 2rem;
                font-style: italic;
            }

            p{
                margin-left: 3px;
            }
        }

    }

    img{
        width: 50%;

    }
    button{
        background: transparent;
        width: 60px;
        height: 60px;
        border: none;
        position: absolute;
        right: 0;
    }
`