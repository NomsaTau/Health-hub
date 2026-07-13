import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Button from '../components/Button.jsx';
import CTA from '../components/CTA.jsx';

const contactDetails = [
  {
    icon: Phone,
    heading: 'Phone',
    primary: '010 446 9854',
    secondary: 'Mon to Fri, 08:00 - 17:00',
  },
  {
    icon: Mail,
    heading: 'Email',
    primary: 'info@healthhms.co.za',
    secondary: 'We reply within one business day',
  },
  {
    icon: MapPin,
    heading: 'Office',
    primary: '7 Quince Street, Milpark',
    secondary: 'Johannesburg, South Africa',
  },
  {
    icon: Clock,
    heading: 'Trading hours',
    primary: 'Monday to Friday',
    secondary: '08:00 to 17:00',
  },
];

const serviceOptions = [
  'Occupational health services',
  'Executive medical assessments',
  'Mobile medicals',
  'Pre-employment medicals',
  'Medical staffing',
  'Emergency event services',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Replace with real submission handler (API call, Formspree, etc.)
    console.log('Contact form submission:', form);
    setSubmitted(true);
  };

  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Contact"
        title="Let's talk about your medical programme"
        description="Send us a brief and we will respond within one business day."
      />

      {/* Contact form + details */}
      <section className="section-padding bg-white">
        <div className="container-section grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-pink rounded-2xl p-10 text-center">
                <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
                <h3 className="text-2xl mb-3">Message received</h3>
                <p className="text-dark/70 max-w-md mx-auto">
                  Thank you {form.name || 'for getting in touch'}. We will respond within one business day.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' });
                  }}
                  variant="outline"
                  className="mt-6"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <div className="bg-pink rounded-2xl p-8 lg:p-10">
                <h3 className="text-2xl mb-6">Send us a brief</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Full name" name="name" value={form.name} onChange={onChange} required />
                  <Field label="Company" name="company" value={form.company} onChange={onChange} />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
                  <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} />
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-dark mb-2">
                      Service of interest
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Choose a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-dark mb-2">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      required
                      placeholder="Tell us about your workforce, sites, and what you need."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Button onClick={onSubmit} type="submit" size="lg" withArrow>
                    Send message
                  </Button>
                  <p className="text-xs text-dark/50 mt-3">
                    By submitting, you agree to be contacted about your enquiry. We will not share your details.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2 space-y-4">
            {contactDetails.map((c) => (
              <div key={c.heading} className="flex items-start gap-4 p-5 rounded-2xl border border-border/40">
                <div className="w-11 h-11 rounded-xl bg-peach flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{c.heading}</h4>
                  <p className="text-dark">{c.primary}</p>
                  <p className="text-sm text-dark/60 mt-0.5">{c.secondary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-20">
        <div className="container-section">
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border/40 shadow-soft">
            <iframe
              title="HealthHub Medical Solutions office location"
              src="https://maps.google.com/maps?q=7+Quince+Street+Milpark+Johannesburg&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CTA
        variant="dark"
        eyebrow="Looking for something else?"
        title="Browse our services or learn about us"
        description="If you want to do more research before reaching out, our services page has the detail."
        primaryCta={{ to: '/services', label: 'Explore services' }}
        secondaryCta={{ to: '/about', label: 'About HealthHub' }}
      />
    </>
  );
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-dark mb-2">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
    </div>
  );
}
