import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import {  useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path='/' element={<Employees />}>
          </Route>
          <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers />}>
          </Route>
          <Route path='*' element={<NotFound />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
