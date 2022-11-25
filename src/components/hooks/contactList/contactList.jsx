import React , { useRef, useState } from 'react';
import { CONTACT } from "../../../models/contact.class"
import Contact from '../../pure/contact/contact';
import "./contactList.scss"

const ContactList = () => {

    const ContactExample1 = new CONTACT(
        "bruno",
        "capote",
        "brunetecapote@gmail.com",
        true
    );
    const ContactExample2 = new CONTACT(
        "martin",
        "perez",
        "martin@gmail.com",
        false
    );
    const ContactExample3 = new CONTACT(
        "romina",
        "sape",
        "romisape@gmail.com",
        true
    );

    const [contacts, setContact] = useState([ContactExample1 , ContactExample2 , ContactExample3]);

    const nameRef = useRef("");
    const surnameRef = useRef("");
    const emailRef = useRef("");

    function añadirContacto(e){
        e.preventDefault()
        const tempContacts = [...contacts];
        const newContact = new CONTACT(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            false
        )
        tempContacts.push(newContact);
        setContact(tempContacts);
    }

    function cambiarEstado(contacto){
        const index = contacts.indexOf(contacto);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContact(tempContacts);
    }

    function removerContacto(contacto){
        const index = contacts.indexOf(contacto);
        const tempContacts = [...contacts];
        tempContacts.splice(index , 1);
        setContact(tempContacts);
    }

    return (
        <div className='contact-list-container'>
            <h1>Lista de Contactos</h1>
            <form action="" className='form-container' onSubmit={añadirContacto}>
                <h2>Agregar Contacto</h2>
                <div className='form-inputs'>
                    <input type="text" name="" id="" required placeholder='Nombre' ref={nameRef}/>
                    <input type="text" name="" id="" required placeholder='Apellido' ref={surnameRef}/>
                    <input type="email" name="" id="" required placeholder='email@gmail.com' ref={emailRef}/>
                    <button type='submit'>Add Contact</button>
                </div>
            </form>
            {contacts.map( (contacto , index) => {
                return(
                    <Contact
                        contact = { contacto }
                        status  = { cambiarEstado }
                        remove  = { removerContacto }
                    >   
                    </Contact> 
                )
            })}
        </div>
    );
}

export default ContactList;
