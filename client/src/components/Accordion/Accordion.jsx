import { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
      >
        {title}
        <span className="ml-2 text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="py-2 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
