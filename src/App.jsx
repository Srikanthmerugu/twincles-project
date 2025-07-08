// src/App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './home/Home';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import TwoWaySMSPage from './pages/Products/TwoWaySMSPage';
import BulkSMSPage from './pages/Products/BulkSMSPage';
import SmartLinksPage from './pages/Products/SmartLinksPage';
import VoiceBroadcastingPage from './pages/Products/VoiceBroadcastingPage';
import WhatsAppBusinessPage from './pages/Products/WhatsAppBusinessPage';
import OTPServices from './pages/Products/OTPServices';
import MMSMessagingPage from './pages/Products/MMSMessagingPage';
import ContactCenterSolutionsPage from './pages/Products/ContactCenterSolutionsPage';
import TrueCallerBusiness from './pages/Products/TrueCallerBusiness';
import DLTRegistrationPage from './pages/solutions/DLTRegistrationPage';
import APIDocumentation from './pages/solutions/APIDocumentation';
import UseCasesPage from './pages/solutions/UseCasesPage';
import OurCustomersSection from './pages/solutions/OurCustomersSection';
import BlogsPage from './pages/BlogsPage';
import ScrollToTop from './ScrollToTop';
import Layout from './components/Layout';



function App() {
  return (
    <>
    <Router>
            <Layout>

            <ScrollToTop />

      <div className="min-h-screen bg-sky-50 text-sky-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bulk-sms" element={<BulkSMSPage />} />
            <Route path="/two-wa-sms" element={<TwoWaySMSPage />} />
            <Route path="/smart-links" element={<SmartLinksPage />} />
            <Route path="/voice-broadcasting" element={<VoiceBroadcastingPage />} />
            <Route path="/whatsApp-business" element={<WhatsAppBusinessPage />} />
            <Route path="/otp-services" element={<OTPServices />} />
            <Route path="/mms-messaging" element={<MMSMessagingPage />} />
            <Route path="/contact-center-solutions" element={<ContactCenterSolutionsPage />} />
            <Route path="/ruecaller-business" element={<TrueCallerBusiness />} />
            <Route path="/dlt-registration" element={<DLTRegistrationPage />} />
            <Route path="/api-documentation" element={<APIDocumentation />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/our-customers" element={<OurCustomersSection />} />
            <Route path="/all-blogs" element={<BlogsPage />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
            </Layout>

    </Router>
    </>
  );
}

export default App;
