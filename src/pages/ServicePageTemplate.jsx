import React from "react";
import { Link } from "react-router-dom";
import ServiceHero from "../components/services/ServiceHero";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceProcess from "../components/services/ServiceProcess";
import ServicePricing from "../components/services/ServicePricing";
import ServiceTestimonials from "../components/services/ServiceTestimonials";
import Magnet from "../components/animations/Magnet";
import Particles from "../components/bg/Particles";
import { getAllServices } from "../data/servicesData";

const ServicePageTemplate = ({ service, setShowContactForm }) => {
  const allServices = getAllServices();
  const relatedServices = allServices.filter(s => s.slug !== service.slug).slice(0, 3);

  const getServicePath = (slug) => {
    return `/services/${slug}`;
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 pt-4 pb-4">
        <nav className="text-sm text-gray-400">
          <Link to="/" className="hover:text-blue-500 transition-colors cursor-target">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/#services" className="hover:text-blue-500 transition-colors cursor-target">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <ServiceHero service={service} setShowContactForm={setShowContactForm} />

      {/* Features Section */}
      <ServiceFeatures features={service.features} />

      {/* Process Section */}
      <ServiceProcess process={service.process} />

      {/* Pricing Section */}
      <ServicePricing pricing={service.pricing} setShowContactForm={setShowContactForm} />

      {/* Testimonials Section */}
      <ServiceTestimonials testimonials={service.testimonials} stats={service.stats} />

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="relative py-16 md:py-24 px-4 md:px-6">
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.4, zIndex: 0 }}>
            <Particles
              particleColors={['#ffffff', '#ffffff', '#f3f4f6']}
              particleCount={80}
              particleSpread={6}
              speed={0.05}
              particleBaseSize={50}
              moveParticlesOnHover={true}
              particleHoverFactor={0.3}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  to={getServicePath(relatedService.slug)}
                  className="block cursor-target"
                >
                  <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all h-full group">
                    <img
                      src={relatedService.icon}
                      alt={relatedService.title}
                      className="w-16 h-16 object-contain mb-4 invert group-hover:scale-110 transition-transform"
                    />
                    <h3 className="text-xl font-semibold text-blue-500 mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {relatedService.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-6">
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3, zIndex: 0 }}>
          <Particles
            particleColors={['#3b82f6', '#60a5fa']}
            particleCount={60}
            particleSpread={5}
            speed={0.04}
            particleBaseSize={40}
            moveParticlesOnHover={true}
            particleHoverFactor={0.4}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals. Contact us today for a free consultation.
            </p>
            <Magnet
              magnetStrength={3}
              padding={50}
              wrapperClassName="inline-block"
              innerClassName="inline-block"
            >
              <button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:opacity-90 transition-all cursor-target text-lg"
              >
                Contact Us Now
              </button>
            </Magnet>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
