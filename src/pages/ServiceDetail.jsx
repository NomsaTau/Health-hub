import { useParams, Navigate, Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import * as Icons from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import CTA from '../components/CTA.jsx';
import { getServiceBySlug, services } from '../data/services.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Service"
        title={service.title}
        description={service.subtitle}
        primaryCta={{ to: '/contact', label: 'Request a quote' }}
        secondaryCta={{ to: '/services', label: 'All services' }}
      />

      {/* Overview + large feature image */}
      <section className="section-padding bg-white">
        <div className="container-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="eyebrow mb-4">Overview</p>
            <h2 className="mb-6">A trusted partner for {service.title.toLowerCase()}</h2>
            <p className="text-lg text-dark/70 leading-relaxed">{service.overview}</p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-peach overflow-hidden shadow-card relative">
            {service.heroImage ? (
              <img
  src={service.heroImage}
  alt={service.title}
  className="w-full h-full object-cover"
/>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-pink to-peach flex items-center justify-center">
                {(() => {
                  const Icon = Icons[service.icon] || Icons.Stethoscope;
                  return <Icon className="w-24 h-24 text-primary/30" />;
                })()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="section-padding bg-pink">
        <div className="container-section">
          <SectionTitle
            eyebrow="Core services"
            title="What's included"
            description="The essential elements of every engagement."
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.coreServices.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized evaluations */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <p className="eyebrow mb-4">Specialised evaluations</p>
              <h2 className="mb-4">Tailored to the hazards of your industry</h2>
              <p className="text-dark/70 leading-relaxed">
                Each programme is configured to match the inherent requirements of the role and the regulatory frameworks that apply to your sector.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {service.specializedEvaluations.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-2">
                    <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-peach">
        <div className="container-section">
          <SectionTitle
            eyebrow="Benefits"
            title="What you get out of it"
            align="center"
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <FeatureCard
                key={b.title}
                icon={b.icon}
                title={b.title}
                description={b.description}
                variant="soft"
              />
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Next step"
        title={service.cta?.title || 'Ready to get started?'}
        description={service.cta?.description}
      />

      {/* Other services */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl md:text-3xl">Other services</h2>
            <Link to="/services" className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => {
              const Icon = Icons[s.icon] || Icons.Stethoscope;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group block bg-pink rounded-2xl p-6 hover:bg-peach transition-colors"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-sm text-dark/70">{s.subtitle}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="container-section py-12">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-dark/60 hover:text-primary font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all services
        </Link>
      </div>
    </>
  );
}
