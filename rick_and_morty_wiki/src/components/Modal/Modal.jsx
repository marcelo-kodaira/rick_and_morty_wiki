import React, { useEffect, useRef, useState } from 'react'
import {MdClose} from 'react-icons/md'
import { StyledModal } from './style'

const Modal = ({current,setCurrent}) =>{


    const [episode, setEpisode] = useState([])
    const modalRef = useRef()

    useEffect(() =>{
        function closeModal(e){
            if(!modalRef.current.contains(e.target)){
                setCurrent(null)
            }
        }
        document.addEventListener("mousedown",closeModal)
        return(() =>{
            document.removeEventListener("mousedown", closeModal)
        })
    },[])

    useEffect(() =>{
        fetch(current.episode[0])
        .then(res => res.json())
        .then(json => setEpisode([...episode, json]));
    },[])

    return(
        <>
            {
                current && 
                <StyledModal>
                            <div className="overlay">
                                <div className='modal-content' ref={modalRef}>
                                    <img src={current.image} alt={current.name}/>
                                    <div>
                                        <h2>{current.name}</h2>

                                        <p><em>Espécie: </em>{current.species}</p>

                                        <p><em>Status: </em>{current.status}</p>

                                        <p><em>Localização: </em>{current.origin.name}</p>

                                        {
                                            episode.map((ep) =>
                                             <p><em>Primeiro Episódio:  </em>{ep.episode} - {ep.name}</p>)
                                        }
                                        
                                    </div>
                                        <button type="button" onClick={() => setCurrent(null)}><MdClose size={24}/></button>
                                </div>
                            </div>
                </StyledModal>
            }
        </>
    )
}

export default Modal