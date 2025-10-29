import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import PageLayout, { ContactFormContext } from "./components/layout/PageLayout";
import HomePage from "./pages/HomePage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import BrandingPage from "./pages/BrandingPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";

function HomePageWrapper() {
  const { setShowContactForm } = useContext(ContactFormContext);
  return <HomePage setShowContactForm={setShowContactForm} />;
}

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaPage />} />
        <Route path="/services/branding" element={<BrandingPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
