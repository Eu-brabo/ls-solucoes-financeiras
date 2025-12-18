
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - Desktop Always, Mobile Drawer */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 relative">
        {/* Mobile Header */}
        <header className={`lg:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 flex items-center justify-between ${scrolled ? 'bg-[#001a33] text-white shadow-lg' : 'bg-transparent text-[#001a33]'}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">LS</div>
            <span className="font-bold tracking-tight">LS NEGÓCIOS</span>
          </div>
          <button onClick={toggleSidebar} className="p-2">
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>

        {/* Content Sections */}
        <div id="home">
          <Hero />
        </div>
        
        <div id="servicos" className="bg-slate-50 py-20 px-6 lg:px-12">
          <Services />
        </div>

        <div id="agendar" className="bg-white py-20 px-6 lg:px-12 border-t border-slate-100">
          <BookingForm />
        </div>

        <Footer />

        {/* Floating Chatbot */}
        <Chatbot />
      </main>
    </div>
  );
};

export default App;
