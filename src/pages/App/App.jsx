import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../pages/HomePage/HomePage';
import DashboardPage from '../../pages/DashboardPage/DashboardPage';
import CardDetailPage from '../../pages/CardDetailPage/CardDetailPage';
import EditCardPage from '../EditCardPage/EditCardPage';
import CartPage from '../CartPage/CartPage';
import * as cardsAPI from '../../utilities/cards-api';
import * as ordersAPI from '../../utilities/orders-api';
import StorefrontPage from '../StorefrontPage/StorefrontPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [allCards, setAllCards] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(function () {
    async function getAllCards() {
      const allCards = await cardsAPI.getAllCards();
      setAllCards(allCards);
    }
    async function getCart() {
      const cart = await ordersAPI.getCart();
      const cartItems = allCards.filter((card) => cart.cards.includes(card._id));
      setCart(cartItems);
    }
    if (user) {
      getCart();
    }
    getAllCards();
  }, [user]);
  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage allCards={allCards} user={user} setAllCards={setAllCards} />} />
            <Route path="/dashboard" element={<DashboardPage allCards={allCards} user={user} setAllCards={setAllCards} />} />
            <Route path="/cards/:id" element={<CardDetailPage user={user} setAllCards={setAllCards} allCards={allCards} setCart={setCart} cart={cart} />} />
            <Route path="/cards/:id/edit" element={<EditCardPage allCards={allCards} setAllCards={setAllCards} />} />
            <Route path="/cart" element={<CartPage allCards={allCards} setAllCards={setAllCards} cart={cart} setCart={setCart} />} />
            <Route path="/storefront/:userId" element={<StorefrontPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
