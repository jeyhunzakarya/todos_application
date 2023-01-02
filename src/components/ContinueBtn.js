import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import "../css/button.css";

function ContinueBtn() {
    const selectedUsr = useSelector((state)=>{
        return state.selectedUser
    })
    const navigate = useNavigate();
    const onClickHandler=()=>{
        navigate(`/${selectedUsr.id}`)
    }
    
    return (
        <button className="continue-button" onClick={onClickHandler}>Continue</button>
    )
}

export default ContinueBtn