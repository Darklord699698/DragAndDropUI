import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import Modal from "react-modal";
import "react-resizable/css/styles.css";

// Define custom styles for the modal
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '400px',
    borderRadius: '20px',
    padding: '20px',
  }
};

const Card = ({ id, initialTitle = "", initialDescription = "", initialText = "" }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [text, setText] = useState(initialText);
  const [showModal, setShowModal] = useState(false);

  // Ensure text is defined
  const previewText = text ? text.substring(0, Math.floor(text.length / 2)) : "";

  return (
    <Draggable>
      <div className="w-64 h-96 bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
        {/* Heading Bar */}
        <div className="bg-gray-800 text-white p-3 rounded-t-3xl flex items-center justify-between">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg font-semibold bg-transparent border-none outline-none w-full"
            placeholder="Enter title"
          />
        </div>

        <ResizableBox
          width={256}
          height={384}
          minConstraints={[200, 300]}
          className="resize overflow-hidden bg-white rounded-b-3xl shadow-md"
        >
          <div className="flex flex-col h-full p-4">
            {/* Description */}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="text-gray-600 mb-4 border rounded p-2"
              placeholder="Enter description"
            />

            {/* Preview Text */}
            <div className="text-gray-600 mb-4">
              {previewText}...
            </div>

            {/* Show More Button */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Show More
            </button>
          </div>
        </ResizableBox>

        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          style={modalStyles}
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-800 mb-4">{text}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </Draggable>
  );
};

export default Card;
