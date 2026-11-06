/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RouteElevation } from './components/RouteElevation';
import { TechnicalRegulationsModal } from './components/TechnicalRegulations';
import { InscribedRidersList } from './components/InscribedRidersList';
import { AltitudeCalculator } from './components/AltitudeCalculator';
import { PricingCategories } from './components/PricingCategories';
import { SafetyLogistics } from './components/SafetyLogistics';
import { ConcertAndSponsors } from './components/ConcertAndSponsors';
import { RulesAndContact } from './components/RulesAndContact';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('elite-varones');
  const [isTeamRegistration, setIsTeamRegistration] = useState(false);

  const handleOpenRegister = (category = 'elite-varones', isTeam = false) => {
    setSelectedCategory(category);
    setIsTeamRegistration(isTeam);
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      {/* Top Bar Header */}
      <Header onOpenRegister={() => handleOpenRegister('elite-varones', false)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section & Key Performance Indicators */}
        <Hero onOpenRegister={() => handleOpenRegister('elite-varones', false)} />

        {/* 2. Official Inscribed Riders (167 Riders with Dorsal/Club/Country) */}
        <InscribedRidersList />

        {/* 3. Official Race Schedule & Technical Regulations (PDF Convocatoria V1) */}
        <TechnicalRegulationsModal />

        {/* 4. Route Profile, Interactive Altimetry & Kilian Bron History */}
        <RouteElevation />

        {/* 5. High Altitude & Physiological Hypoxia Simulator */}
        <AltitudeCalculator />

        {/* 6. Competition Categories, Prizes & Team 10+1 Rate */}
        <PricingCategories onOpenRegister={handleOpenRegister} />

        {/* 7. Safety Deployment, Bomberos Santa Bárbara & Alto Milluni History */}
        <SafetyLogistics />

        {/* 8. Cultural Finish Line Concert (Armadura) & Official Sponsors */}
        <ConcertAndSponsors />

        {/* 9. Mandatory Gear Checklist, WhatsApp Channels & FAQ */}
        <RulesAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Registration & Credential Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        defaultCategory={selectedCategory}
        isTeamDefault={isTeamRegistration}
      />
    </div>
  );
}
