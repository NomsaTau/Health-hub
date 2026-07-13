import Button from './Button.jsx';

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  variant = 'home',
  children,
}) {
  // Compact variant for inner pages
  if (variant === 'inner') {
    return (
      <section className="bg-peach relative overflow-hidden">
        <div className="container-section pt-16 md:pt-24 pb-16 md:pb-20 relative">
          <div className="max-w-3xl">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="mb-6">{title}</h1>
            {description && (
              <p className="text-lg md:text-xl text-dark/70 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-3 mt-8">
                {primaryCta && (
                  <Button to={primaryCta.to} withArrow>
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button to={secondaryCta.to} variant="outline">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Decorative arc */}
        <div
          aria-hidden="true"
          className="absolute right-[-10%] top-[-20%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        />
      </section>
    );
  }

  // Default home variant
  return (
    <section className="bg-peach relative overflow-hidden">
      <div className="container-section pt-12 md:pt-20 pb-16 md:pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="mb-6">{title}</h1>
            {description && (
              <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-8">
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              {primaryCta && (
                <Button to={primaryCta.to} size="lg" withArrow>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button to={secondaryCta.to} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
            {children}
          </div>

          <div className="relative">
            <div className="aspect-[4/5] lg:aspect-[5/6] rounded-2xl bg-white shadow-card overflow-hidden relative">
              {image ? (
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-pink to-peach flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-24 h-24 rounded-full bg-primary/15 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">⚕️</span>
                    </div>
                    <p className="text-sm text-dark/50 font-medium">Hero image placeholder</p>
                  </div>
                </div>
              )}
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/20 -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
