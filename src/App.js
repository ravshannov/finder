import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './components/context/UserContext';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Profile from './components/users/Profile';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<Profile />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>

  );
}

export default App;
