import React from 'react';

interface FlagProps {
  country: string;
  className?: string;
}

export const CountryFlag: React.FC<FlagProps> = ({ country, className = "w-4 h-3 inline-block rounded-xs shadow-xs" }) => {
  switch (country.toLowerCase()) {
    case 'bolivia':
      return (
        <svg viewBox="0 0 30 20" className={className} aria-label="Bolivia">
          <rect width="30" height="6.67" y="0" fill="#D52B1E" />
          <rect width="30" height="6.67" y="6.67" fill="#FCD116" />
          <rect width="30" height="6.67" y="13.33" fill="#007934" />
        </svg>
      );
    case 'perú':
    case 'peru':
      return (
        <svg viewBox="0 0 30 20" className={className} aria-label="Perú">
          <rect width="10" height="20" x="0" fill="#D91023" />
          <rect width="10" height="20" x="10" fill="#FFFFFF" />
          <rect width="10" height="20" x="20" fill="#D91023" />
        </svg>
      );
    case 'españa':
    case 'espana':
    case 'spain':
      return (
        <svg viewBox="0 0 30 20" className={className} aria-label="España">
          <rect width="30" height="5" y="0" fill="#AA151B" />
          <rect width="30" height="10" y="5" fill="#F1BF00" />
          <rect width="30" height="5" y="15" fill="#AA151B" />
        </svg>
      );
    case 'alemania':
    case 'germany':
      return (
        <svg viewBox="0 0 30 20" className={className} aria-label="Alemania">
          <rect width="30" height="6.67" y="0" fill="#000000" />
          <rect width="30" height="6.67" y="6.67" fill="#DD0000" />
          <rect width="30" height="6.67" y="13.33" fill="#FFCE00" />
        </svg>
      );
    case 'francia':
    case 'france':
      return (
        <svg viewBox="0 0 30 20" className={className} aria-label="Francia">
          <rect width="10" height="20" x="0" fill="#002395" />
          <rect width="10" height="20" x="10" fill="#FFFFFF" />
          <rect width="10" height="20" x="20" fill="#ED2939" />
        </svg>
      );
    case 'estados unidos':
    case 'usa':
    case 'eeuu':
      return (
        <svg viewBox="0 0 30 20" className={className} aria-label="Estados Unidos">
          <rect width="30" height="20" fill="#B22234" />
          <rect width="30" height="1.54" y="1.54" fill="#FFFFFF" />
          <rect width="30" height="1.54" y="4.62" fill="#FFFFFF" />
          <rect width="30" height="1.54" y="7.69" fill="#FFFFFF" />
          <rect width="30" height="1.54" y="10.77" fill="#FFFFFF" />
          <rect width="30" height="1.54" y="13.85" fill="#FFFFFF" />
          <rect width="30" height="1.54" y="16.92" fill="#FFFFFF" />
          <rect width="12" height="10.77" fill="#3C3B6E" />
        </svg>
      );
    case 'uruguay':
      return (
        <svg viewBox="0 0 30 20" className={className} aria-label="Uruguay">
          <rect width="30" height="20" fill="#FFFFFF" />
          <rect width="30" height="2.22" y="2.22" fill="#0038A8" />
          <rect width="30" height="2.22" y="6.67" fill="#0038A8" />
          <rect width="30" height="2.22" y="11.11" fill="#0038A8" />
          <rect width="30" height="2.22" y="15.56" fill="#0038A8" />
          <rect width="11" height="9" fill="#FFFFFF" />
          <circle cx="5.5" cy="4.5" r="3" fill="#FCD116" />
        </svg>
      );
    default:
      return null;
  }
};

