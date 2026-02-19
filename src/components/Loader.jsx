import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ()=> {
    return(
        <div style={{width:'80%', height:'85vh', display: 'flex', justifyContent:'center', alignContent:'center'}}>
        <Spinner animation="grow" variant="warning" size="sm" />
        </div>
    )
}
export default Loader