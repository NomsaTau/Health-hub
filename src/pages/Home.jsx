import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import CTA from '../components/CTA.jsx';
import Button from '../components/Button.jsx';
import { services } from '../data/services.js';
import { Award, Shield, Users, TrendingUp } from 'lucide-react';
import heroImage from '/hero.jpg';

const trustLogos = [
  { name: 'Old Mutual', src: '/logos/old-mutual.png' },
  { name: 'Clicks', src: '/logos/clicks.png' },
  { name: 'Heineken', src: '/logos/heineken.png' },
];
const whyChooseUs = [
  {
    icon: 'Award',
    title: 'HPCSA accredited',
    description: 'Every practitioner registered and in good standing. Documentation that stands up to audit.',
  },
  {
    icon: 'Clock',
    title: 'Fast turnaround',
    description: 'Most certificates issued within 24 hours. Mobile teams deployed in days, not weeks.',
  },
  {
    icon: 'MapPin',
    title: 'Nationwide reach',
    description: 'Permanent clinics in Gauteng and mobile teams covering all nine provinces.',
  },
  {
    icon: 'FileCheck',
    title: 'Clean documentation',
    description: 'Digital records, integrated reporting, and audit-ready files from day one.',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="TRUSTED BY SOUTH AFRICAN EMPLOYERS"
        title={<> Keeping your workforce healthy, <span className="text-primary"> compliant and productive.</span></>}
        description="From statutory medicals to executive assessments, mobile clinics to event emergency cover, HealthHub delivers the medical infrastructure your business depends on."
        image={heroImage}
        primaryCta={{ to: '/contact', label: 'Book a consultation' }}
        secondaryCta={{ to: '/services', label: 'Explore services' }}
      >
        {/* Quick stats under hero CTAs */}
        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-dark/10 max-w-md">
          <div>
            <div className="text-2xl font-bold text-dark">15+</div>
            <div className="text-xs text-dark/60 mt-1">years experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-dark">50k+</div>
            <div className="text-xs text-dark/60 mt-1">medicals delivered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-dark">200+</div>
            <div className="text-xs text-dark/60 mt-1">client companies</div>
          </div>
        </div>
      </Hero>

      {/* Trust section */}
      {/* Trust section */}
<section className="bg-white py-12 border-b border-border/40">
  <div className="container-section">
    <p className="text-center text-sm font-medium text-dark/50 uppercase tracking-wider mb-8">
      Trusted by South African employers
    </p>

    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-28 lg:gap-36 hover:[animation-play-state:paused]">
        {[...trustLogos, ...trustLogos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.name}
            className="h-12 md:h-14 w-auto flex-shrink-0 grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Services overview */}
      <section className="section-padding bg-pink">
        <div className="container-section">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <SectionTitle
              eyebrow="What we do"
              title="Complete medical services, one trusted partner"
              description="Everything from statutory occupational health to executive medicals, delivered on-site or in-clinic."
            />
            <Button to="/services" variant="outline" withArrow>
              View all services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.subtitle}
                features={service.specializedEvaluations?.slice(0, 3)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <SectionTitle
            eyebrow="Why HealthHub"
            title="Reliability you can build a programme around"
            description="The reasons clients renew with us year after year."
            align="center"
            className="mb-12 lg:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="soft"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Big quote / proof */}
      <section className="section-padding bg-peach">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <p className="eyebrow mb-6">What clients say</p>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-dark mb-8">
              "I highly recommend HealthHub Medical Solutions to any healthcare provider looking for reliable, innovative, and top-tier medical solutions. The practice boasts the latest in technology as well as precise, calm and soothing advice from all the practitioners."
            </blockquote>
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-full bg-primary/20" />
              <div className="text-left">
                <div className="font-semibold text-dark">Healthcare partner</div>
                <div className="text-dark/60">Verified patient testimonial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Get started"
        title="Talk to our team about your medical programme"
        description="Whether you need full occupational health management or one-off mobile cover, we will design a fit and quote within a week."
        primaryCta={{ to: '/contact', label: 'Book a consultation' }}
        secondaryCta={{ to: '/services', label: 'See what we offer' }}
      />
    </>
  );
}
