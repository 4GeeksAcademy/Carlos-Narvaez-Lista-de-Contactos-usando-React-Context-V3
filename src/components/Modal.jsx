import React from "react";

export const Modal = ({ show, onClose, onConfirm }) => {
    if (!show) return null;

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content shadow">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Delete</h5>
                        {/* Standard Bootstrap Close Button */}
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <p className="fs-5">Are you sure you want to delete this contact?</p>
                        <p className="text-muted small">This action cannot be undone.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger" onClick={onConfirm}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

