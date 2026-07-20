import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import ValuationModal from './components/ValuationModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AgentsPage from './pages/AgentsPage';
import ListingsPage from './pages/ListingsPage';
import DelawareStatePage from './pages/DelawareStatePage';
import PennsylvaniaStatePage from './pages/PennsylvaniaStatePage';
import FloridaStatePage from './pages/FloridaStatePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Helper to map pathname to page id
  const getPageFromPath = (path) => {
    switch (path.toLowerCase().replace(/\/$/, '')) {
      case '/about':
        return 'about';
      case '/agents':
        return 'agents';
      case '/listings':
      case '/properties':
        return 'listings';
      case '/delaware':
      case '/de':
        return 'delaware';
      case '/pennsylvania':
      case '/pa':
        return 'pennsylvania';
      case '/florida':
      case '/fl':
        return 'florida';
      case '/contact':
        return 'contact';
      default:
        return 'home';
    }
  };

  const getPathFromPage = (page) => {
    switch (page) {
      case 'about':
        return '/about';
      case 'agents':
        return '/agents';
      case 'listings':
        return '/listings';
      case 'delaware':
        return '/delaware';
      case 'pennsylvania':
        return '/pennsylvania';
      case 'florida':
        return '/florida';
      case 'contact':
        return '/contact';
      default:
        return '/';
    }
  };

  const [currentPage, setCurrentPageState] = useState(() => getPageFromPath(window.location.pathname));
  const [listingModalOpen, setListingModalOpen] = useState(false);
  const [listingModalType, setListingModalType] = useState('house');
  const [valuationModalOpen, setValuationModalOpen] = useState(false);

  // Sync state with URL path
  const setCurrentPage = (pageId) => {
    setCurrentPageState(pageId);
    const targetPath = getPathFromPage(pageId);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ pageId }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPageState(getPageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenListingModal = (type = 'house') => {
    setListingModalType(type);
    setListingModalOpen(true);
  };

  const handleCloseListingModal = () => {
    setListingModalOpen(false);
  };

  const handleOpenValuationModal = () => {
    setValuationModalOpen(true);
  };

  const handleCloseValuationModal = () => {
    setValuationModalOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
          />
        );
      case 'about':
        return (
          <AboutPage
            setCurrentPage={setCurrentPage}
            onOpenValuationModal={handleOpenValuationModal}
          />
        );
      case 'agents':
        return (
          <AgentsPage
            onOpenValuationModal={handleOpenValuationModal}
          />
        );
      case 'listings':
        return (
          <ListingsPage
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
          />
        );
      case 'delaware':
        return (
          <DelawareStatePage
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
          />
        );
      case 'pennsylvania':
        return (
          <PennsylvaniaStatePage
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
          />
        );
      case 'florida':
        return (
          <FloridaStatePage
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onOpenValuationModal={handleOpenValuationModal}
          />
        );
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenListingModal={handleOpenListingModal}
            onOpenValuationModal={handleOpenValuationModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-bahamas-500 selection:text-white">
      {/* Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenListingModal={handleOpenListingModal}
        onOpenValuationModal={handleOpenValuationModal}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenValuationModal={handleOpenValuationModal}
      />

      {/* Pop-up Modals */}
      <PropertyModal
        isOpen={listingModalOpen}
        onClose={handleCloseListingModal}
        initialType={listingModalType}
      />

      <ValuationModal
        isOpen={valuationModalOpen}
        onClose={handleCloseValuationModal}
      />
    </div>
  );
}
