import React from "react";
import { useContext } from "react";
import ServicePageTemplate from "./ServicePageTemplate";
import { getServiceBySlug } from "../data/servicesData";
import { ContactFormContext } from "../components/layout/PageLayout";

const DigitalMarketingPage = () => {
  const { setShowContactForm } = useContext(ContactFormContext);
  const service = getServiceBySlug("digital-marketing");

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServicePageTemplate service={service} setShowContactForm={setShowContactForm} />;
};

export default DigitalMarketingPage;
