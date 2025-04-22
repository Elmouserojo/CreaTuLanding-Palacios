import React from 'react'
import { PacmanLoader } from 'react-spinners'

const LoaderComponent = () => {
    return (
        <div style={{width:'100%', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <PacmanLoader color='yellow'/>
        </div>
    )
}

export default LoaderComponent