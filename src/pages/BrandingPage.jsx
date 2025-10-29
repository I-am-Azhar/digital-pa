import React from "react";
import { useContext } from "react";
import ServicePageTemplate from "./ServicePageTemplate";
import { getServiceBySlug } from "../data/servicesData";
import { ContactFormContext } from "../components/layout/PageLayout";

const BrandingPage = () => {
  const { setShowContactForm } = useContext(ContactFormContext);
  const service = getServiceBySlug("branding");

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServicePageTemplate service={service} setShowContactForm={setShowContactForm} />;
};

export default BrandingPage;
