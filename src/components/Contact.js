import React from 'react'
import './Contact.css'
export default function Contact(props) {
    return (
        <div className="container" style = {props.styles}>
        <form action="" className="form" style = {props.styles}>
            <h2 style = {props.styles}>Contact us</h2>
            <label for="">Name</label>
            <input type="text" placeholder="Enter your name"/>
            <label for="">Email</label>
            <input type="email" placeholder="Email id"/>
            <label for="">Send messege</label>
            <textarea name="messege" id="messege-box" cols="20" rows="6" placeholder="Type messege here"></textarea>
         <button className="submit">Submit</button>
        </form>
    </div>
    )
}
