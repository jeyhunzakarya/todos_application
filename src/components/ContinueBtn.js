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
        navigate(`/${selectedUsr?.name}`)
    }
    const selectedUserExists = !!selectedUsr
    return (
        <button type='button' disabled={!selectedUserExists} className={`continue-button ${selectedUserExists?"":" disabled"}`}  onClick={onClickHandler}>Continue</button>
    )
}

export default ContinueBtn