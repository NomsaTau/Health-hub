export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const maxWidth = align === 'center' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <div className={`${alignment} ${maxWidth} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-dark/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
