import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import CTA from '../components/CTA.jsx';
import { services } from '../data/services.js';

const categories = [
  {
    heading: 'Occupational Health',
    description:
      'Statutory medical surveillance and on-site clinic management for regulated industries.',
    image: '/service-category-images/occupational-health.png',
    slugs: ['occupational-health-services'],
  },
  {
    heading: 'Executive Medicals',
    description:
      'Comprehensive annual health reviews for senior leaders.',
    image: '/service-category-images/executive-medicals.jpg',
    slugs: ['executive-medical-assessments'],
  },
  {
    heading: 'Mobile and High-Volume',
    description:
      'Bring the clinic to your site with our fully equipped mobile medical units.',
    image: '/service-category-images/mobile-medicals.png',
    slugs: ['mobile-medicals'],
  },
  {
    heading: 'Pre-Employment',
    description:
      'Job-specific fitness assessments to start every hire with a clean baseline.',
    image: '/service-category-images/pre-employment.jpg',
    slugs: ['pre-employment-medicals'],
  },
];

export default function Services() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Services"
        title="Medical solutions matched to your business"
        description="Browse our full service portfolio. Every offering is delivered by HPCSA-registered practitioners with full documentation and audit-ready records."
        primaryCta={{
          to: '/contact',
          label: 'Request a proposal',
        }}
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          <SectionTitle
            eyebrow="Service Categories"
            title="Pick the entry point that fits your need"
            description="Most clients combine two or three of these. Talk to us about packaging."
            className="mb-16"
          />

          <div className="space-y-28">
            {categories.map((cat) => {
              const items = cat.slugs
                .map((slug) => services.find((s) => s.slug === slug))
                .filter(Boolean);

              return (
                <section key={cat.heading}>
                  {/* Heading */}
                  <div className="mb-8">
                    <h2 className="text-3xl font-semibold text-dark">
                      {cat.heading}
                    </h2>

                    <p className="mt-2 text-dark/70 max-w-3xl">
                      {cat.description}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-center">
                    {/* Left Card */}
                    <div>
                      {items.map((s) => (
                        <ServiceCard
                          key={s.slug}
                          slug={s.slug}
                          icon={s.icon}
                          title={s.title}
                          description={s.subtitle}
                          features={s.specializedEvaluations?.slice(0, 3)}
                        />
                      ))}
                    </div>

                    {/* Right Image */}
                    <div className="rounded-[30px] bg-white p-4 shadow-2xl border border-slate-100">
                      <div className="aspect-[3/2] overflow-hidden rounded-[24px]">
                        <img
                          src={cat.image}
                          alt={cat.heading}
                          className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Not sure where to start?"
        description="Tell us about your workforce and we'll recommend the right combination of services."
      />
    </>
  );
}