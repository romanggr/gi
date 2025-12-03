export default function Section({ 
  children, 
  id, 
  title, 
  subtitle,
  className = ""
}: { 
  children: React.ReactNode; 
  id?: string; 
  title?: string;
  subtitle?: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" >
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto" >
                {subtitle}
              </div>
            )}
            {title && <div className="w-20 h-0.5 bg-[var(--color-gold)] mx-auto mt-6" />}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
