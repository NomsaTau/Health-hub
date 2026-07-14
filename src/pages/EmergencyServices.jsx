import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import CTA from '../components/CTA.jsx';
import { eventSupport, partnershipCapabilities, venuesSupported, serviceScope } from '../data/emergency.js';

export default function EmergencyServices() {
  return (
    <>
      {/* Split hero: text left, concert image right */}
      <section className="bg-peach">
        <div className="container-section py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="eyebrow mb-4">Event medical services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Emergency medical cover for events and gatherings
            </h1>
            <p className="text-lg text-dark/70 leading-relaxed mb-8 max-w-xl">
              Paramedics, ambulances, and incident command for sporting events, festivals, conferences, and production sets.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Plan your event
            </Link>
          </div>

          {/* Right: image */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
            <img
              src="/concert-crowd-stage.jpg"
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* How we support */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <SectionTitle
            eyebrow="How we support your event"
            title="A full event medical operation, planned and delivered"
            description="We take responsibility for the medical risk so organisers can focus on the experience."
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventSupport.map((s) => (
              <FeatureCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                variant="soft"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full-width banner: safety officers on the ground */}
      <section aria-hidden="true" className="w-full">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src="/medics-sporting.png"
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* Partnership capabilities + Venues */}
      <section className="section-padding bg-peach">
        <div className="container-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Partnership capabilities */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="/partnership-handshake.jpg"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="p-8 lg:p-10">
              <p className="eyebrow mb-4">Partnership capabilities</p>
              <h3 className="text-2xl mb-6">What we can take on</h3>
              <ul className="space-y-3">
                {partnershipCapabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-dark/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Venues supported */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="/urban-venue-ambulance.jpg"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="p-8 lg:p-10">
              <p className="eyebrow mb-4">Venues supported</p>
              <h3 className="text-2xl mb-6">Where we work</h3>
              <ul className="space-y-3">
                {venuesSupported.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-dark/80">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service scope */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <SectionTitle
            eyebrow="Service scope"
            title="From primary care to advanced life support"
            description="Our scope scales with the risk profile of the event."
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceScope.map((s) => (
              <FeatureCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Event planning"
        title="Planning an event? Let's talk medical cover"
        description="Tell us the date, venue, and expected attendance. We will return a medical risk assessment and quote."
      />
    </>
  );
}