import React, { useState, useEffect } from 'react';

const Langue = () => {
    const [language, setLanguage] = useState("fr"); // Default language is French
    const handleLanguageChange = (lang) => {
       setLanguage(lang);
    };
  return (
    <div>
        <div className="language-switcher">
        <button
          className={language === "fr" ? "active" : ""}
          onClick={() => handleLanguageChange("fr")}
        >
          French
        </button>
        <button
          className={language === "en" ? "active" : ""}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </button>
      </div>
    </div>
  )
}

export default Langue