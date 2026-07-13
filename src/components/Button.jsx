import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-soft hover:shadow-card',
  secondary:
    'bg-dark text-white hover:bg-dark/90 shadow-soft hover:shadow-card',
  outline:
    'bg-transparent text-dark border border-dark/15 hover:border-primary hover:text-primary',
  ghost: 'bg-transparent text-dark hover:bg-peach',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none';

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
