import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  href = '#',
}) {
  return (
    <a
      href={href}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[16/10] overflow-hidden bg-peach">
        {image ? (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-peach via-pink to-primary/10 flex items-center justify-center">
            <span className="text-4xl opacity-30">📝</span>
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {category && (
          <span className="inline-block self-start px-3 py-1 rounded-full bg-peach text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            {category}
          </span>
        )}

        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-dark/70 leading-relaxed mb-5 line-clamp-3 flex-1">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border/40 text-xs text-dark/60">
          <div className="flex items-center gap-4">
            {date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
            )}
            {readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {readTime}
              </span>
            )}
          </div>
          <ArrowUpRight className="w-4 h-4 text-dark/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </a>
  );
}
