import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@csstools/normalize.css';
import './styles/css/reset.css'
import './styles/css/main.css'

// import components
import Sidebar from './components/Sidebar/Sidebar'
import SliderApp from './components/Slider/SliderApp'
import Analytics from './components/Pages/Analytics/Analytics'
import Profiles from './components/Pages/Profiles/Profiles'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SliderApp />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profiles" element={<Profiles />} />


        </Routes>
    </BrowserRouter>
  )
}

export default App