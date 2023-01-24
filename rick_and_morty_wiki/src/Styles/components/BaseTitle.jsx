import { Children } from "react"

export const BaseTitle = ({childre, tag, className}) =>{

    return(
        <>
            {tag === 'h1' &&  <h1 className={className}>{Children}</h1>}
            {tag === 'h2' &&  <h2 className={className}>{Children}</h2>}
            {tag === 'h3' &&  <h3 className={className}>{Children}</h3>}
            {tag === 'h4' &&  <h4 className={className}>{Children}</h4>}
            {tag === 'h5' &&  <h5 className={className}>{Children}</h5>}
            {tag === 'h6' &&  <h6 className={className}>{Children}</h6>}
        </>
    )
}