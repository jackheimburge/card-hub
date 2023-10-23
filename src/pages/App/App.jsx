import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../pages/HomePage/HomePage';
import DashboardPage from '../../pages/DashboardPage/DashboardPage';
import CardDetailPage from '../../pages/CardDetailPage/CardDetailPage';
import * as cardsAPI from '../../utilities/cards-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [allCards, setAllCards] = useState([]);

  useEffect(function () {
    async function getAllCards() {
      const allCards = await cardsAPI.getAllCards();
      setAllCards(allCards);
    }
    getAllCards();
  }, []);
  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage allCards={allCards} />} />
            <Route path="/dashboard" element={<DashboardPage allCards={allCards} user={user} setAllCards={setAllCards} />} />
            <Route path="/cards/:id" element={<CardDetailPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
