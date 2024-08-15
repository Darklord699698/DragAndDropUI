import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const Card = ({ id, initialTitle = "", initialText = "" }) => {
  const [title, setTitle] = useState(initialTitle);
  const [text, setText] = useState(initialText);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandText = () => {
    setIsExpanded(!isExpanded);
  };

  const showMoreRequired = text.length > 100; // Adjust this length to suit your needs

  return (
    <Draggable>
      <div className="flex flex-col w-64 h-auto overflow-hidden bg-white shadow-lg rounded-3xl">
        {/* Heading Bar */}
        <div className="flex items-center justify-between p-3 text-white bg-gray-800 rounded-t-3xl">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-lg font-semibold bg-transparent border-none outline-none"
            placeholder="Enter title"
          />
        </div>

        <ResizableBox
          width={256}
          height={200}
          minConstraints={[200, 200]}
          className="overflow-hidden bg-white shadow-md resize rounded-b-3xl"
        >
          <div className="flex flex-col h-full p-4">
            {/* Editable Text Area */}
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-full mb-4 text-gray-600 border-none outline-none resize-none"
              placeholder="Enter description"
              style={{ height: isExpanded ? "auto" : "60px", overflow: "hidden" }}
            />

            {/* Show More/Show Less */}
            {showMoreRequired && (
              <span
                onClick={toggleExpandText}
                className="text-blue-500 cursor-pointer"
              >
                {isExpanded ? "Show More" : "Show Less"}
              </span>
            )}
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
};

export default Card;
