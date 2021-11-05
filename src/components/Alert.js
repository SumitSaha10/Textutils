import React from 'react'
import './Alert.css';
export default function Alert(props) {
    return (
        <div className="parentdiv">
        {props.displayMessege && <div className="alert" style = {props.displayMessege.dMes}>
            <strong>{props.displayMessege.type}</strong> {props.displayMessege.messege}
        </div>}
        </div>
    )
}
