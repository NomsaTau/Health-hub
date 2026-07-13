import * as Icons from 'lucide-react';

export default function FeatureCard({
  icon = 'CheckCircle2',
  title,
  description,
  variant = 'default',
}) {
  const Icon = Icons[icon] || Icons.CheckCircle2;

  const styles = {
    default: 'bg-white border border-border/40 shadow-soft',
    soft: 'bg-pink border border-transparent',
    peach: 'bg-peach border border-transparent',
  };

  return (
    <div className={`${styles[variant]} rounded-2xl p-6 lg:p-7`}>
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-dark/70 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
