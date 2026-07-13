import Button from './Button.jsx';

export default function CTA({
  eyebrow = 'Get started',
  title = 'Ready to elevate your workplace health programme?',
  description = "Speak with our team about tailored medical solutions for your business.",
  primaryCta = { to: '/contact', label: 'Get in touch' },
  secondaryCta,
  variant = 'primary',
}) {
  const bg = variant === 'primary'
    ? 'bg-primary text-white'
    : 'bg-dark text-white';

  return (
    <section className={`${bg} relative overflow-hidden`}>
      <div className="container-section section-padding relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70 mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-white mb-5">{title}</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">{description}</p>
          <div className="flex flex-wrap gap-3">
            {primaryCta && (
              <Button
                to={primaryCta.to}
                variant={variant === 'primary' ? 'secondary' : 'primary'}
                size="lg"
                withArrow
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                to={secondaryCta.to}
                size="lg"
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-white/5"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/5"
        />
      </div>
    </section>
  );
}
