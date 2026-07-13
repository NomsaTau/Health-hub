import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function ServiceCard({
  slug,
  icon = 'Stethoscope',
  title,
  description,
  features = [],
}) {
  const Icon = Icons[icon] || Icons.Stethoscope;

  return (
    <Link
      to={`/services/${slug}`}
      className="group block bg-white rounded-2xl p-7 border border-border/40 hover:border-primary/40 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-xl bg-peach group-hover:bg-primary/10 flex items-center justify-center transition-colors">
          <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
        </div>
        <ArrowUpRight className="w-5 h-5 text-dark/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>

      <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-dark/70 leading-relaxed text-sm mb-4">{description}</p>

      {features.length > 0 && (
        <ul className="space-y-1.5 text-sm text-dark/60">
          {features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
