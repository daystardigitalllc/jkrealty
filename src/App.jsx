import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ListingModal from './components/PropertyModal';
import ValuationModal from './components/ValuationModal';
import ContactModal from './components/ContactModal';

import HomePage from './pages/HomePage';
import DelawareStatePage from './pages/DelawareStatePage';
import PennsylvaniaStatePage from './pages/PennsylvaniaStatePage';
import FloridaStatePage from './pages/FloridaStatePage';
import AgentsPage from './pages/AgentsPage';
import AboutPage from './pages/AboutPage';
import ListingsPage from './pages/ListingsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [listingModalOpen, setListingModalOpen] = useState(false);
  const [listingType, setListingType] = useState('SFR,MF,TC,LAL,MOBILE,OTHER');
  const [valuationModalOpen, setValuationModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedAgentName, setSelectedAgentName] = useState(null);

  const handleOpenListingModal = (type = 'SFR,MF,TC,LAL,MOBILE,OTHER') => {
    let code = 'SFR,MF,TC,LAL,MOBILE,OTHER';
    if (type === 'house') code = 'SFR';
    if (type === 'condo') code = 'TC,MF';
    if (type === 'mf') code = 'MF';
    setListingType(code);
    setListingModalOpen(true);
  };

  const handleOpenValuationModal = () => {
    setValuationModalOpen(true);
  };

  const handleOpenContactModal = (agentName = null) => {
    setSelectedAgentName(agentName);
    setContactModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            setCurrentPage={setCurrentPage}
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'delaware':
        return (
          <DelawareStatePage 
            setCurrentPage={setCurrentPage}
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'pennsylvania':
        return (
          <PennsylvaniaStatePage 
            setCurrentPage={setCurrentPage}
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'florida':
        return (
          <FloridaStatePage 
            setCurrentPage={setCurrentPage}
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'agents':
        return (
          <AgentsPage 
            setCurrentPage={setCurrentPage}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'about':
        return (
          <AboutPage 
            setCurrentPage={setCurrentPage}
            onOpenValuationModal={handleOpenValuationModal}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'listings':
        return (
          <ListingsPage 
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <HomePage 
            setCurrentPage={setCurrentPage}
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
            onOpenContactModal={handleOpenContactModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-bahamas-500 selection:text-white">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onOpenListingModal={handleOpenListingModal}
        onOpenValuationModal={handleOpenValuationModal}
        onOpenContactModal={handleOpenContactModal}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer 
        setCurrentPage={setCurrentPage}
        onOpenListingModal={handleOpenListingModal}
        onOpenValuationModal={handleOpenValuationModal}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Modals */}
      <ListingModal 
        isOpen={listingModalOpen} 
        onClose={() => setListingModalOpen(false)} 
        initialPropertyType={listingType}
      />

      <ValuationModal 
        isOpen={valuationModalOpen} 
        onClose={() => setValuationModalOpen(false)} 
      />

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        agentName={selectedAgentName}
      />
    </div>
  );
}
