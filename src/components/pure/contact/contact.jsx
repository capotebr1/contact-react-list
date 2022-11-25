import React from 'react';
import "./contact.scss"
const Contact = ({ contact , status , remove }) => {

    function contactIconCompleted(){
        if(contact.conected){
            return ( <i onClick={() => status(contact)} className='bi-toggle-on task-action' style={{color:"green" , fontSize:"30px" , cursor:"pointer"}}></i> )
        }
        else{
            return ( <i onClick={() => status(contact)} className='bi-toggle-off task-action' style={{color:"red" , fontSize:"30px" , cursor:"pointer"}}></i> )
        }
    }

    

    return (
        <div className='contact-container' >
            <div className='contact-info'>
                <h2 className='contact-name'><i class="bi bi-person-circle" ></i>  {(contact.name)[0].toUpperCase() + (contact.name).slice(1)} {(contact.surname)[0].toUpperCase() + (contact.surname).slice(1)}</h2>
                <h3>{contact.email}</h3>
            </div>
            <div className='contact-state'>
                <h3>{contact.conected ? <p className='contact-online'>Online</p> : <p className='contact-offline'>Offline</p>}</h3>
                <div className='contact-options'>
                    {contactIconCompleted()}
                    <i onClick={() => remove(contact)} className='bi-trash' style={{color:"red" , fontSize:"30px", cursor:"pointer"}}></i>
                </div>   
            </div>

        </div>
    );
}

export default Contact;
