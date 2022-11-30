
import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';

const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =({original_title, poster_path, vote_average, release_date, overview,popularity,original_language})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return
        

        
    
    
}

export default MovieBox;