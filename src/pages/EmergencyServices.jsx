import { Check } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import CTA from '../components/CTA.jsx';
import { eventSupport, partnershipCapabilities, venuesSupported, serviceScope } from '../data/emergency.js';

export default function EmergencyServices() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Event medical services"
        title="Emergency medical cover for events and gatherings"
        description="Paramedics, ambulances, and incident command for sporting events, festivals, conferences, and production sets."
        primaryCta={{ to: '/contact', label: 'Plan your event' }}
      />

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

      {/* Partnership capabilities + Venues */}
      <section className="section-padding bg-peach">
        <div className="container-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-soft">
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
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-soft">
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
