import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { Modal } from "../components/Modal.jsx";

export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();
    const [state, setState] = useState({ showModal: false, id: null });
    const agenda = "astrid";

    const loadContacts = async () => {
        try {
            const resp = await fetch(`https://playground.4geeks.com/contact/agendas/astrid/contacts`);
            if (resp.status === 404) {
                await fetch(`https://playground.4geeks.com/contact/agendas/astrid`, { method: "POST" });
            } else if (resp.ok) {
                const data = await resp.json();
                dispatch({ type: "load_contacts", payload: data.contacts });
            }
        } catch (error) { console.error("Load error:", error); }
    };

    useEffect(() => { loadContacts(); }, []);

const deleteContact = async () => {
    try {
        // 1. Added '/contact/' after the domain
        // 2. Added '$' before '{state.id}' so it uses the actual ID number
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/astrid/contacts/${state.id}`, {
            method: "DELETE"
        });

        if (resp.ok) {
            dispatch({ type: "delete_contact", payload: state.id });
            setState({ showModal: false, id: null });
        } else {
            console.error("The API returned an error. Make sure the ID and Agenda exist.");
        }
    } catch (error) {
        console.error("Connection error:", error);
    }
};



    return (
        <div className="container mt-5">
            <h1 className="text-center mt-5">Contact List</h1>
            <div className="d-flex justify-content-end mb-4">
                <Link to="/add_contact" className="btn btn-success">Add new contact</Link>
            </div>
            <ul className="list-group shadow">
                {store.contacts && store.contacts.map(item => (
                    <ContactCard 
                        key={item.id} 
                        contact={item} 
                        onDelete={() => setState({ showModal: true, id: item.id })} 
                    />
                ))}
            </ul>
            <Modal show={state.showModal} onClose={() => setState({ showModal: false, id: null })} onConfirm={deleteContact} />
        </div>
    );
};

