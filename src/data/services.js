// All service content lives here so /services/:slug renders entirely from data.
// Add a new object to this array to create a new service detail page.

export const services = [
  {
    slug: 'occupational-health-services',
    icon: 'HardHat',
    title: 'Occupational Health Services',
    subtitle: 'Compliant, on-site medical care for industrial and corporate workplaces',
   heroImage: '/service-category-images/occupational-health.png',
    overview:
      'Our occupational health programmes help employers meet OHS Act and Mine Health and Safety Act requirements while keeping workers fit, safe, and productive. We deliver on-site or in-clinic medical assessments tailored to your industry, hazard profile, and shift patterns.',
    coreServices: [
      {
        icon: 'ClipboardCheck',
        title: 'Statutory Medical Surveillance',
        description: 'Pre-employment, periodic, and exit medicals aligned to regulated industry standards.',
      },
      {
        icon: 'Activity',
        title: 'Fitness for Duty Assessments',
        description: 'Objective evaluations for safety-sensitive roles, return-to-work, and rehabilitation cases.',
      },
      {
        icon: 'Stethoscope',
        title: 'On-site Clinic Management',
        description: 'Permanent or part-time clinics staffed with occupational health practitioners and nurses.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Vaccination Programmes',
        description: 'Flu, hepatitis B, tetanus, and travel vaccinations delivered on-site or at our facilities.',
      },
    ],
    specializedEvaluations: [
      'Audiometry and noise-induced hearing loss screening',
      'Spirometry and lung function testing',
      'Vision screening and visual acuity assessments',
      'Working at heights medicals',
      'Confined space and respirator fitness assessments',
      'Drug and alcohol testing',
      'Ergonomic risk assessments',
      'Biological monitoring (lead, chemicals, solvents)',
    ],
    benefits: [
      {
        icon: 'TrendingDown',
        title: 'Lower absenteeism',
        description: 'Early detection and proactive care reduce sick days and long-term claims.',
      },
      {
        icon: 'Scale',
        title: 'Regulatory compliance',
        description: 'Stay audit-ready with documented assessments and certificates of fitness.',
      },
      {
        icon: 'Users',
        title: 'Healthier workforce',
        description: 'Workers who feel cared for stay longer and perform better.',
      },
      {
        icon: 'FileText',
        title: 'Clean record-keeping',
        description: 'Digital records, secure storage, and easy reporting for management and inspectors.',
      },
    ],
    cta: {
      title: 'Need an occupational health partner you can rely on?',
      description: 'We design programmes around your sites, shifts, and hazards. Book a consultation to see what fits.',
    },
  },
  {
    slug: 'executive-medical-assessments',
    icon: 'Briefcase',
    title: 'Executive Medical Assessments',
    subtitle: 'Comprehensive health reviews for leaders who carry the load',
    heroImage: '/service-category-images/executive-medicals.jpg',
    overview:
      'Senior executives are exposed to chronic stress, long hours, and sedentary travel. Our executive medicals combine a full physical workup with cardiovascular screening, advanced bloods, and lifestyle coaching, delivered in a discreet, time-efficient half-day.',
    coreServices: [
      {
        icon: 'Heart',
        title: 'Cardiovascular Risk Profile',
        description: 'Resting and stress ECG, blood pressure, lipid profile, and individualised risk scoring.',
      },
      {
        icon: 'Microscope',
        title: 'Advanced Pathology',
        description: 'Full blood count, kidney and liver function, thyroid, HbA1c, PSA, and tumour markers.',
      },
      {
        icon: 'Brain',
        title: 'Cognitive and Stress Review',
        description: 'Burnout, sleep, and mental wellbeing screening with onward referral where needed.',
      },
      {
        icon: 'Apple',
        title: 'Lifestyle and Nutrition Coaching',
        description: 'Personalised plan covering diet, exercise, sleep, and stress management.',
      },
    ],
    specializedEvaluations: [
      'Body composition analysis',
      'Resting and stress electrocardiogram',
      'Pulmonary function testing',
      'Comprehensive ophthalmology and audiology',
      'Skin cancer screening',
      'Gender-specific cancer screening',
      'Travel health and immunisation review',
      'Detailed written report with follow-up plan',
    ],
    benefits: [
      {
        icon: 'Clock',
        title: 'Half-day format',
        description: 'Everything in one visit so leaders can return to work the same afternoon.',
      },
      {
        icon: 'Lock',
        title: 'Discreet and confidential',
        description: 'Private consulting suites and reports issued only to the individual.',
      },
      {
        icon: 'Sparkles',
        title: 'Concierge experience',
        description: 'Coordinated scheduling, clear results, and a follow-up plan you will actually use.',
      },
      {
        icon: 'Shield',
        title: 'Catch issues early',
        description: 'Detect risk factors years before symptoms show.',
      },
    ],
    cta: {
      title: 'Invest in your leadership team',
      description: 'Annual executive medicals are one of the highest-leverage benefits a business can offer.',
    },
  },
  {
    slug: 'mobile-medicals',
    icon: 'Truck',
    title: 'Mobile Medicals',
    subtitle: 'A fully equipped clinic, delivered to your site',
    heroImage: '/service-category-images/mobile-medicals.png',
    overview:
      'When your workforce is spread across remote sites or you need to medical hundreds of employees in a short window, our mobile medical units come to you. Each unit is equipped for full medical surveillance and staffed by qualified occupational health practitioners.',
    coreServices: [
      {
        icon: 'Truck',
        title: 'Fully Equipped Mobile Units',
        description: 'Audiometric booth, spirometry, vision screener, ECG, and consulting rooms on board.',
      },
      {
        icon: 'Users',
        title: 'High-Volume Throughput',
        description: 'Up to 60 medicals per day per unit with our optimised flow.',
      },
      {
        icon: 'MapPin',
        title: 'Nationwide Coverage',
        description: 'Mobile teams deployable across South Africa, including remote mining and agricultural sites.',
      },
      {
        icon: 'CalendarClock',
        title: 'Flexible Scheduling',
        description: 'Single day, multi-day, or recurring deployments to suit your operational calendar.',
      },
    ],
    specializedEvaluations: [
      'Pre-employment and periodic medical surveillance',
      'Working at heights and confined space assessments',
      'Audiometry in calibrated soundproof booth',
      'Spirometry and lung function testing',
      'Vision and ophthalmic screening',
      'Resting ECG',
      'Drug and alcohol testing',
      'On-site vaccinations',
    ],
    benefits: [
      {
        icon: 'Plane',
        title: 'No travel downtime',
        description: 'Workers stay on-site instead of losing hours commuting to clinics.',
      },
      {
        icon: 'Coins',
        title: 'Cost-effective at scale',
        description: 'One mobile day often beats the cost of dozens of individual clinic visits.',
      },
      {
        icon: 'Zap',
        title: 'Fast turnaround',
        description: 'Certificates of fitness issued on the day where possible.',
      },
      {
        icon: 'FileCheck2',
        title: 'Full documentation',
        description: 'Digital records integrated with your HR or SHEQ system.',
      },
    ],
    cta: {
      title: 'Bring the clinic to your workforce',
      description: 'Tell us where your sites are and how many people you need seen. We will build the schedule.',
    },
  },
  {
    slug: 'pre-employment-medicals',
    icon: 'UserCheck',
    title: 'Pre-Employment Medicals',
    subtitle: 'Start every hire with a clear baseline',
    heroImage: '/service-category-images/pre-employment.jpg',
    overview:
      'Pre-employment medicals confirm a candidate is fit for the inherent requirements of the role, protect employers from inheriting historic conditions, and establish a baseline for future surveillance. We design pre-employment protocols specific to each job profile.',
    coreServices: [
      {
        icon: 'ClipboardList',
        title: 'Job-Specific Protocols',
        description: 'Medical content matched to the hazards and demands of the role, not a generic checklist.',
      },
      {
        icon: 'Timer',
        title: 'Fast Turnaround',
        description: 'Most candidates seen, tested, and certified within 24 to 48 hours.',
      },
      {
        icon: 'FileText',
        title: 'Clear Certificates of Fitness',
        description: 'Unambiguous fit, fit with restrictions, or unfit recommendations with rationale.',
      },
      {
        icon: 'Database',
        title: 'Baseline Records',
        description: 'Audiometric, spirometric, and clinical baselines stored for future comparison.',
      },
    ],
    specializedEvaluations: [
      'Medical history and physical examination',
      'Vision screening',
      'Audiometry baseline',
      'Spirometry baseline',
      'Urinalysis and drug screening',
      'Working at heights evaluation',
      'Functional capacity evaluation where required',
      'Psychometric and cognitive screening (optional)',
    ],
    benefits: [
      {
        icon: 'ShieldCheck',
        title: 'Reduce hidden risk',
        description: 'Identify conditions that could lead to injury or claims down the line.',
      },
      {
        icon: 'Gauge',
        title: 'Hire with confidence',
        description: 'Match candidates to roles they can perform safely and sustainably.',
      },
      {
        icon: 'LineChart',
        title: 'Establish baselines',
        description: 'Clear starting points make future surveillance comparisons defensible.',
      },
      {
        icon: 'Handshake',
        title: 'Smooth onboarding',
        description: 'Concierge booking and same-week appointments keep your hiring timeline on track.',
      },
    ],
    cta: {
      title: 'Hire faster, hire safer',
      description: 'Streamline your pre-employment process with a partner that gets it done in days, not weeks.',
    },
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
