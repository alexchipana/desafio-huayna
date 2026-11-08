/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhotoSlider } from './components/PhotoSlider';
import { RaceResults } from './components/RaceResults';
import { RouteElevation } from './components/RouteElevation';
import { TechnicalRegulationsModal } from './components/TechnicalRegulations';
import { InscribedRidersList } from './components/InscribedRidersList';
import { PricingCategories } from './components/PricingCategories';
import { SafetyLogistics } from './components/SafetyLogistics';
import { ConcertAndSponsors } from './components/ConcertAndSponsors';
import { RulesAndContact } from './components/RulesAndContact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col overflow-x-hidden w-full max-w-full">
      {/* Top Bar Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section & Key Performance Indicators */}
        <Hero />

        {/* 2. Official Photo Gallery Slider (57 Photos from Google Photos) */}
        <PhotoSlider />

        {/* 3. Official Race Results (145 Classified Athletes - Sporthive MYLAPS) */}
        <RaceResults />

        {/* 4. Official Inscribed Riders (167 Riders with Dorsal/Club/Country) */}
        <InscribedRidersList />

        {/* 3. Official Race Schedule & Technical Regulations (PDF Convocatoria V1) */}
        <TechnicalRegulationsModal />

        {/* 4. Route Profile, Interactive Altimetry & Kilian Bron History */}
        <RouteElevation />

        {/* 5. Competition Categories, Prizes & Team 10+1 Rate */}
        <PricingCategories />

        {/* 6. Safety Deployment, Bomberos Santa Bárbara & Alto Milluni History */}
        <SafetyLogistics />

        {/* 7. Cultural Finish Line Concert (Armadura) & Official Sponsors */}
        <ConcertAndSponsors />

        {/* 8. Mandatory Gear Checklist, WhatsApp Channels & FAQ */}
        <RulesAndContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
