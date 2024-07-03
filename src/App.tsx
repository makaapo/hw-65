import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';

const App = () => (
  <>
    <header>
      <Navbar/>
    </header>
    <main className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="pages/home"/>} />
        <Route path="pages/:pageName" element={<Content />} />
        <Route path="pages/admin" element={<h1>Admin</h1>} />
        <Route path="*" element={<h3 className="text-center fs-1">Not Found</h3>} />
      </Routes>
    </main>
  </>
);

export default App;