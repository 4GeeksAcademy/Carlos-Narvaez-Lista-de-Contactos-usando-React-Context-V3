import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from "react";

export const AddContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { id } = useParams(); // Detects if there is an ID in the URL

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    // If editing, load the contact data into the form
    useEffect(() => {
        if (id && store.contacts.length > 0) {
            const contactToEdit = store.contacts.find(c => c.id === parseInt(id));
            if (contactToEdit) setData(contactToEdit);
        }
    }, [id, store.contacts]);

    const formChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const FormSubmit = async (e) => {
        e.preventDefault();
        
        // Conditional URL and Method: POST for new, PUT for edit
        const url = id 
            ? `https://playground.4geeks.com/contact/agendas/astrid/contacts/${id}`
            : "https://playground.4geeks.com/contact/agendas/astrid/contacts";

 
        const method = id ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Error al guardar el contacto");
            }

            const result = await response.json();

            dispatch({
                type: id ? "update_contact" : "add_contact",
                payload: result
            });
            
            navigate("/Contact");
        } catch (error) {
            console.error("error al procesar contacto:", error);
            alert("Hubo un error al procesar el contacto");
        }
    };

    return (
        <div className="mt-5 container">
            <h1 className="text-center mt-5">{id ? "Update contact" : "Add a new contact"}</h1>
            <form className="row g-3" onSubmit={FormSubmit}>
                <div className="col-12">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Full Name" value={data.name} onChange={formChange} name="name" required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter email" value={data.email} onChange={formChange} name="email" required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Enter Phone" value={data.phone} onChange={formChange} name="phone" required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" value={data.address} onChange={formChange} name="address" required />
                </div>
                <div className="col-12 d-grid gap-2">
                    <button type="submit" className="btn btn-primary">{id ? "Update" : "Save"}</button>
                    <Link to="/Contact">
                        <span className="navbar-brand mb-0 h1">or get back to contacts</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};
