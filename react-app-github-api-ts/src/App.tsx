import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/homepage";
import { FavouritePage } from "./pages/favouritepage";
import { Navigation } from './components/navigation'

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/favouritepage' element={ <FavouritePage /> } />
    </Routes>
   </>
  );
}

export default App;
