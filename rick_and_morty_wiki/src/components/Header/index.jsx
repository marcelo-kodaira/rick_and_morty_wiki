import logo_header from './logo_header.png'
import { StyledHeader } from './style'

const Header = () =>{
    return(
        <StyledHeader>
            <img src={logo_header} alt="Rick and Morty Logo" />
        </StyledHeader>
    )
}

export default Header