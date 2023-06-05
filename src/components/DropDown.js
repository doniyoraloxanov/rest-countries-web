import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1  dark:bg-darkblue"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative ">
      <Panel
        className="flex justify-between items-center cursor-pointer dark:text-gray-200"
        onClick={handleClick}
      >
        {value?.label || "Filter by Region"}
        <GoChevronDown className="text-lg " />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full dark:text-gray-200">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
