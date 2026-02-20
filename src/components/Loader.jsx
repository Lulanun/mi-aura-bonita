import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ()=> {
    return(
        <div style={{
            width:'100%', 
            height:'85vh', 
            display: 'flex', 
            justifyContent:'center', 
            alignItems:'center',
            flexDirection:'column',
            gap:'1rem'
        }}>
            <Spinner animation="grow" variant="warning" style={{width:'4rem', height:'4rem'}}/>
            <span style={{color:'rgb(255, 177, 125)', fontWeight:'600'}}>Cargando...</span>
        </div>
    )
}
export default Loader