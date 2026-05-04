import React from "react";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact, onDelete }) => (
    <li className="list-group-item p-4">
        <div className="row align-items-center">
            <div className="col-md-3 text-center">
                <img src="https://picsum.photos" className="rounded-circle" alt="user" />
            </div>
            <div className="col-md-7">
                <h5>{contact.name}</h5>
                <p className="text-muted mb-1"><i className="fas fa-map-marker-alt me-3"></i>{contact.address}</p>
                <p className="text-muted mb-1"><i className="fas fa-phone me-3"></i>{contact.phone}</p>
                <p className="text-muted mb-0"><i className="fas fa-envelope me-3"></i>{contact.email}</p>
            </div>
            <div className="col-md-2 d-flex justify-content-end align-items-start">
                <Link to={`/edit_contact/${contact.id}`} className="btn me-3"><i className="fas fa-pencil-alt text-dark"></i></Link>
                <button className="btn border-0" onClick={onDelete}><i className="fas fa-trash-alt text-dark"></i></button>
            </div>
        </div>
    </li>
);
