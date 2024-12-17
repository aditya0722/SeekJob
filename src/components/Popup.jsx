import React from "react";

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center "
            style={{
                backdropFilter: "blur(10px) brightness(0.7)",
                WebkitBackdropFilter: "blur(10px) brightness(0.7)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
        >
            <div className="relative max-w-full bg-white rounded-lg shadow-lg w-fit">
                <button
                    className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
