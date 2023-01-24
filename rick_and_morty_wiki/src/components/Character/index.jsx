import { StyledCharacter } from "./style"

const Character = ({name, image, id, onClick}) =>{

    return(
        <StyledCharacter onClick={onClick}>
                <img src={image} alt={name} />
                <h2>{name}</h2>
        </StyledCharacter>
    )
}

export default Character