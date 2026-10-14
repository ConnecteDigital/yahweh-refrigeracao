import React from 'react';
import { AirVent, Snowflake } from 'lucide-react';

// Arte usada no lugar de foto de ar condicionado enquanto não houver
// foto real desse serviço.
const IlustracaoAr = ({ className = 'h-44' }) => (
  <div
    role="img"
    aria-label="Ar condicionado"
    className={`relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ice-2 via-ice to-white ${className}`}
  >
    <Snowflake className="absolute -right-6 -top-6 h-32 w-32 text-white" aria-hidden="true" />
    <Snowflake className="absolute -bottom-8 -left-4 h-24 w-24 text-white/80" aria-hidden="true" />
    <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
      <AirVent className="h-10 w-10" aria-hidden="true" />
    </span>
  </div>
);

export default IlustracaoAr;
