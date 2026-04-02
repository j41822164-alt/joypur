import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import HostingPage from './pages/HostingPage';
import DomainsPage from './pages/DomainsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <TopBar />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hosting" element={<HostingPage />} />
            <Route path="/domains" element={<DomainsPage />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
