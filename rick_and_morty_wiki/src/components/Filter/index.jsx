import { useEffect, useState } from "react"
import api from "../../services/api"
import { StyledSearch } from "./styled";

const Filter = ({setFound, setNotFound, characters}) =>{

    const [data, setData] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            function fetchData() {
              setIsLoading(true);
              api.get(`/character/?page=${pagina}`)
              .then(response => {
                setData(prevData => [...response.data.results,...prevData]);
                if (response.data.info.next) {
                  setPagina(pagina + 1);

                } 
                setIsLoading(false);
              })
              .catch(error => {
                console.log(error);
                setIsLoading(false);
              });
            }
            fetchData();
          }, [pagina]);

          function removeDuplicateObjects(arr) {
            return arr.filter(function(item, index) {
                return arr.findIndex(i => i.id === item.id) === index;
            });
        }

        function handleFilter(e) {
            const search = e.target.value;
            if(search === "") {
                setFound([]) 
                setNotFound(false)
            }
            else{
              setNotFound(false)
              const pattern = new RegExp(search, 'i');
              const foundCharacter = data.filter(ch => pattern.test(ch.name));
                setFound(removeDuplicateObjects(foundCharacter));
              if (foundCharacter.length === 0){
                  return setNotFound(true)
              }
            }
          }
      
        return (
          <StyledSearch>
            <input id="search" type="text"  onChange={(e) => handleFilter(e)} placeholder=" "/>
            <label htmlFor="search">Buscar personagem ...</label>
          </StyledSearch>
        );
      }
    

export default Filter