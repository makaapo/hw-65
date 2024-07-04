import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Admin from './components/Admin/Admin';

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main className="container-fluid">
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="pages/:pageName" element={<Content />} />
        <Route path="pages/admin" element={<Admin />} />
        <Route path="*" element={<h3 className="text-center fs-1">Not Found</h3>} />
      </Routes>
    </main>
  </>
);

export default App;