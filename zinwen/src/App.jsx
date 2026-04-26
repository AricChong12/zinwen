import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matrix from './Matrix'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return null;
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*
      <Matrix />
          */}

      <BrowserRouter>
        <ScrollToHash />

        <Routes>
          <Route path="/" element={<Matrix />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
