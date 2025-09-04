import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Pc from './components/standart/Standart';
import Contact from './components/contact/Contact';
import Tournament from './components/tournament/Tournament';
import BottomNav from './components/bottomnav/BottomNav';
import PrivateRoute from './components/privateroute/PrivateRoute';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import TournamentDetail from './components/tournament-detail/TournamentDetail';
import Menu from './components/menu/Menu';
import Gallery from './components/gallery/Gallery';
import Profile from './components/pages/Profile';
import PointTable from './components/point-table/PointTable';
import Players from './components/players/Players';
import { TranslationProvider } from "./components/translator/Translator";
import BookingForm from './components/pages/BookingForm';
import { AuthProvider } from './components/authсontext/AuthContext';
import Card from './components/card/Card';
import Wishlist from './components/wishlist/Wishlist';
import OrderForm from './components/orderform/OrderForm';
import Loading from './components/loading/Loading';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TranslationProvider>
          <BrowserRouter>
            <Loading>
            <Header />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/standart-pc' element={<Pc />} />
              <Route path='/bookingform' element={<BookingForm />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/tournament' element={<Tournament />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="/tournament-detail/:slug" element={<TournamentDetail />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/point-table" element={<PointTable />} />
              <Route path="/players" element={<Players />} />
              <Route path='/cart' element={<Card />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/orderform" element={<OrderForm />} />
            </Routes>
            <BottomNav />
            <Footer />
            </Loading>
          </BrowserRouter>
        </TranslationProvider>
      </AuthProvider>
    </div>
  );
}

export default App;