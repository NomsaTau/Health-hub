import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import CTA from '../components/CTA.jsx';
import { staffingReasons, staffingProcess, staffingSolutions } from '../data/staffing.js';

export default function Staffing() {
  return (
    <>
      {/* Split hero: text left, clinicians image right */}
      <section className="bg-peach">
        <div className="container-section py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">Medical staffing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Vetted medical professionals, deployed when you need them
            </h1>
            <p className="text-lg text-dark/70 leading-relaxed mb-8 max-w-xl">
              From locum cover to permanent placement, we put credentialed, work-ready clinicians on your site.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Discuss your need
            </Link>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
            <img
              src="/staffing-clinicians.jpg"
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

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

      {/* Full-width banner: team of doctors */}
      <section aria-hidden="true" className="w-full">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src="/staffing-team.jpg"
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
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

      {/* Full-width banner: doctor with tablet */}
      <section aria-hidden="true" className="w-full">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src="/staffing-credentialed.jpg"
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
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

      {/* CTA with coordinator companion image */}
      <section className="section-padding bg-peach">
        <div className="container-section grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-2 aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
            <img
              src="/staffing-coordinator.jpg"
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow mb-4">Staffing enquiry</p>
            <h2 className="text-3xl md:text-4xl mb-4">Need cover this week?</h2>
            <p className="text-lg text-dark/70 leading-relaxed mb-8">
              Send us the role brief and we will revert with vetted candidates within 48 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}