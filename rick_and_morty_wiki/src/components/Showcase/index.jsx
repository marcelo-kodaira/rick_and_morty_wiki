import React, { useEffect, useState } from "react"
import api from "../../services/api"
import Character from "../Character"
import Filter from "../Filter"
import Modal from "../Modal/Modal"
import { StyledBackground, StyledError, StyledList, StyledPagination } from "./style"
import logo from './logo.png'
import logo2 from './logo2.png'

const Showcase = () =>{
    
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [current, setCurrent] = useState(null)
    const [page, setPage] = useState(1)
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(true)
    const [found, setFound] = useState([])
    const [notFound, setNotFound] = useState(false)

    
    useEffect(() =>{
        setLoading(true)
        
        api.get(`character`,{
            params:{
                page
            }
        })
        .then((res) =>{ 
        setCharacters(res?.data?.results)
        setPrev(!res?.data?.info?.prev)
        setNext(!res?.data?.info?.next)
        }
        )
        .catch((err) => console.error(err))
        .finally(setLoading(false))

    }, [page])
    
    function getDetails(id){
        api.get(`character/${id}`)
        .then(res => setCurrent(res?.data))
    }

    return(
        <>
        <Filter setFound ={setFound}  setNotFound={setNotFound} characters={characters}/>
            {
                current && <Modal current={current} setCurrent={setCurrent}/>
            }
            
            <StyledPagination>
                <div>
                    <button
                    disabled={prev}
                    onClick={() => setPage(page - 1)}
                    >Prev</button>
                    <button
                    disabled={next}
                    onClick={()=> setPage(page + 1)}>Next</button>
                </div>
            </StyledPagination>

            {/* {!notFound && <p>Página: {page}</p>} */}

            <StyledBackground>
                {!notFound &&
                <>
                    <img src={logo} alt="Logo Rick and Morty"/>
                    <img src={logo2} alt="Logo Rick and Morty"/>
                </>
                }
                <StyledList>
                    {
                        notFound?
                        <StyledError>Não encontramos o personagem ...</StyledError>
                    :
                         found.length === 0 && characters.map(({index, name, image, id }) =>
                                <Character key={id} name={name} image={image} setDetails={id} id={id} onClick={() => getDetails(id)}/>
                        )
                
                    }
                    
                    {
                        !notFound && found.map(({index, name, image, id }) =>
                        <Character key={id} name={name} image={image} setDetails={id} id={id} onClick={() => getDetails(id)}/>
                    )
                    }
                </StyledList>
            </StyledBackground>
        </>
    )
}

export default Showcase

