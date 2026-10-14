import React from 'react';

// Título padrão de seção: rótulo pequeno + título + subtítulo opcional.
// Mantém o mesmo tamanho e espaçamento em todas as páginas.
const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', as: Tag = 'h2' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    {eyebrow && <p className="text-sm font-bold uppercase tracking-wider text-brand">{eyebrow}</p>}
    <Tag className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</Tag>
    {subtitle && <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtitle}</p>}
  </div>
);

export default SectionHeading;
