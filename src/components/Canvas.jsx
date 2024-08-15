import React, { useState } from "react";
import Card from "./Card";

const Canvas = () => {
  const [cardsData, setCardsData] = useState([]);

  const handleCreateCard = () => {
    const newCardId = `card${cardsData.length + 1}`;
    const newCard = {
      id: newCardId,
      title: `Card ${cardsData.length + 1}`,
      text: "This is a newly created card. Edit the content as needed.",
    };
    setCardsData([...cardsData, newCard]);
  };

  return (
    <div className="flex flex-col h-full p-4">
      {/* Create Card Button */}
      <div className="mb-4">
        <a
          href="#_"
          onClick={(e) => {
            e.preventDefault();
            handleCreateCard();
          }}
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Create Card
          </span>
        </a>
      </div>

      {/* Render Cards */}
      <div className="flex flex-wrap gap-4">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Canvas;