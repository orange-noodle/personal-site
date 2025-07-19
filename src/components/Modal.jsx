import React from 'react';

/**
 * Modal component for dialogs/popups.
 * Props:
 * - isOpen: Boolean to show/hide modal
 * - onClose: Function to close modal
 * - title: Modal title
 * - children: Modal content
 */
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
        className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {title && (
          <h3 id="modal-title" className="text-xl font-semibold mb-4">
            {title}
          </h3>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal; 