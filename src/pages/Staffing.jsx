import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import CTA from '../components/CTA.jsx';
import { staffingReasons, staffingProcess, staffingSolutions } from '../data/staffing.js';

export default function Staffing() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Medical staffing"
        title="Vetted medical professionals, deployed when you need them"
        description="From locum cover to permanent placement, we put credentialed, work-ready clinicians on your site."
        primaryCta={{ to: '/contact', label: 'Discuss your need' }}
      />

      {/* Why choose staffing */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <SectionTitle
            eyebrow="Why HealthHub Staffing"
            title="Compliant talent, deployed fast"
            description="Medical staffing done badly creates risk. We have built our process to remove it."
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffingReasons.map((r) => (
              <FeatureCard
                key={r.title}
                icon={r.icon}
                title={r.title}
                description={r.description}
                variant="soft"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Staffing process */}
      <section className="section-padding bg-peach">
        <div className="container-section">
          <SectionTitle
            eyebrow="The process"
            title="From brief to deployment in days"
            align="center"
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffingProcess.map((step) => (
              <div
                key={step.step}
                className="relative bg-white rounded-2xl p-6 shadow-soft"
              >
                <div className="text-5xl font-bold text-primary/20 mb-3 leading-none">
                  {step.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-dark/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible staffing solutions */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <SectionTitle
            eyebrow="Engagement models"
            title="Flexible staffing solutions"
            description="Pick the model that matches your demand pattern. Switch between them as your needs evolve."
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staffingSolutions.map((s) => (
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
        eyebrow="Staffing enquiry"
        title="Need cover this week?"
        description="Send us the role brief and we will revert with vetted candidates within 48 hours."
      />
    </>
  );
}
