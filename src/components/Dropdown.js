import { useEffect, useRef, useState } from 'react';
import ReactIcon from './ReactIcon';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownEl = useRef();

  useEffect(() => {
    if (!dropdownEl.current) return;

    const handleClick = (event) => {
      if (!dropdownEl.current.contains(event.target)) setIsOpen(false);
    }

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    return <div
      key={option.value}
      className="dropdown__option"
      onClick={() => {
        setIsOpen(false);
        onChange(option.value);
      }}>{option.label}</div>;
  });

  const dropdownIcon = (isOpen) ? <BiSolidUpArrow className="dropdown__img" />
    : <BiSolidDownArrow className="dropdown__img" />;

  return (
    <div className="dropdown" ref={dropdownEl}>
      <div className="dropdown__current" onClick={() => setIsOpen(!isOpen)}>
        <p className="dropdown__text">{`Page ${value}`}</p>
        <ReactIcon src={dropdownIcon} color="#86a69d" />
      </div>
      <div className={`dropdown__menu ${(isOpen) ? 'dropdown__menu_open' : 'dropdown__menu_close'}`}>
        {renderedOptions}
      </div>
    </div>
  );
}

export default Dropdown;
