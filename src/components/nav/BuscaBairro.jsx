import React, { useId, useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { buscarBairros } from '../../data/bairros';
import { waLink } from '../../config/site';

// Campo "Buscar bairro" usado no menu do PC e do celular.
const BuscaBairro = ({ onNavigate, autoFocus = false }) => {
  const [termo, setTermo] = useState('');
  const id = useId();
  const resultados = buscarBairros(termo);

  return (
    <div>
      <label htmlFor={id} className="sr-only">Buscar bairro ou cidade</label>
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
        <input
          id={id}
          type="search"
          value={termo}
          onChange={(event) => setTermo(event.target.value)}
          autoFocus={autoFocus}
          autoComplete="off"
          placeholder="Buscar seu bairro ou cidade"
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-base text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
        />
      </div>

      {termo.trim() && (
        <div className="mt-2">
          {resultados.length > 0 ? (
            <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
              {resultados.map((bairro) => (
                <li key={bairro.slug}>
                  <a
                    href={`/assistencia-tecnica/${bairro.slug}`}
                    onClick={onNavigate}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-ice"
                  >
                    <MapPin className="w-4 h-4 text-brand flex-shrink-0" aria-hidden="true" />
                    <span className="font-semibold text-ink">{bairro.nome}</span>
                    <span className="ml-auto text-sm text-slate-500 truncate">{bairro.municipio ? bairro.regiao : bairro.cidade}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-xl bg-ice px-4 py-3 text-sm text-slate-600">
              Não encontramos "{termo}" na lista.{' '}
              <a
                href={waLink(`Olá! Vocês atendem em ${termo.trim()}?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand underline"
              >
                Pergunte no WhatsApp se atendemos
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default BuscaBairro;
