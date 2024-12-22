import React, { useState, useEffect } from "react";
import "./App.css"
import Header from "./Components/header/Header"
import Products from "./Components/Products/Products"
function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "EN" 
  );

  useEffect(() => {
    const dir = language === "AR" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", language.toLowerCase());
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  console.log(language);
  return (
    <div>
      <Header changeLanguage={changeLanguage} language={language} />
      <Products  language={language} />
    </div>
  )
}

export default App
