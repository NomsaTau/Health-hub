import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import CTA from '../components/CTA.jsx';

const industries = [
  { name: 'Mining and minerals processing', operations: 'Extraction and processing: dust, noise, vibration and heat' },
  { name: 'Manufacturing and FMCG', operations: 'Production lines: chemical agents, noise and repetitive strain' },
  { name: 'Logistics and transport', operations: 'Fleet and warehousing: driver fatigue, manual handling, yard noise' },
  { name: 'Construction and engineering', operations: 'Sites and workshops: silica dust, noise, vibration, work at height' },
  { name: 'Financial and professional services', operations: 'Offices: ergonomic strain and executive wellness' },
  { name: 'Hospitality and events', operations: 'Kitchens and venues: heat, noise and long shifts on foot' },
  { name: 'Agriculture and agri-processing', operations: 'Farms and plants: pesticide exposure, dust and noise' },
  { name: 'Retail and supermarkets', operations: 'Floors and cold chain: manual handling and prolonged standing' },
];

export default function About() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="About HealthHub"
        title="The workplace is the patient."
        description="HealthHub is a doctor-led occupational health practice, helping South African employers see what their work is doing to their people, and put it right."
        primaryCta={{ to: '/contact', label: 'Talk to us' }}
      />

      {/* Who we are + Our approach — one unified section */}
      <section className="section-padding bg-white">
        <div className="container-section grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Tall lobby image running the full height on the left */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="relative">
              <div className="aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-peach via-pink to-primary/15 shadow-card">
                <img
                  src="/lobby.png"
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-primary/15 -z-10"
              />
            </div>
          </div>

          {/* Right column: Who we are, then Our approach with inline diagram */}
          <div className="lg:col-span-3 space-y-12">
            {/* Who we are */}
            <div className="space-y-5 text-lg text-dark/70 leading-relaxed">
              <p className="eyebrow !mb-2">Who we are</p>
              <p>
                HealthHub opened as a single medical practice in Milpark, founded and led by a woman doctor, and proudly black-owned.
              </p>
              <p>
                The practice has since grown into occupational health, and the patient quietly changed shape. Instead of one person, it became a mine, a factory floor, a fleet, a building site. Same clinical eye, a much bigger body to examine.
              </p>
            </div>

            {/* Our approach — diagram sits as inline supporting graphic */}
            <div className="space-y-5 text-lg text-dark/70 leading-relaxed">
              <p className="eyebrow !mb-2">Our approach</p>
              <p>
                One partner, across the full picture of occupational health. From the hazards in your workplace to the records that prove you are managing them.
              </p>
              <img
                src="/oh-approach.png"
                alt="HealthHub's integrated occupational health approach: from workplace risks through occupational hygiene, medical surveillance, and prevention and treatment, to a healthier workforce, compliance, and stronger business outcomes."
                className="w-full h-auto max-w-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries and operations */}
      <section className="section-padding bg-pink">
        <div className="container-section">
          <SectionTitle
            eyebrow="Industries we know"
            title="Every industry harms people in its own particular way."
            description="These are the environments whose hazards we know intimately, and what we watch for in each."
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {industries.map((i) => (
              <div
                key={i.name}
                className="bg-white rounded-xl px-5 py-4"
              >
                <p className="text-sm font-semibold text-dark/90">{i.name}</p>
                <p className="text-xs text-dark/60 mt-1.5 leading-relaxed">{i.operations}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="See if HealthHub is the right fit"
        description="A 30-minute consultation usually tells us both what is possible."
      />
    </>
  );
}