import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Language'); // Default label

  const languages = ['English', 'Urdu', 'Hindi', 'French', 'Spanish'];

  const handleLanguageChange = (language:any) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="dropdown mb-72">
      {/* Dropdown Button */}
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedLanguage}
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      
      {/* Dropdown Menu */}
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
        {languages.map((language, index) => (
          <li key={index}>
            <button
              onClick={() => handleLanguageChange(language)}
              className="btn btn-sm btn-block btn-ghost justify-start">
              {language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
