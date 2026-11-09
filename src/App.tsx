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
import { PricingCategories } from './components/PricingCategories';

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

        {/* 2. Photo Gallery Slider (57 Photos from Google Photos) */}
        <PhotoSlider />

        {/* 3. Race Results (145 Classified Athletes - Sporthive MYLAPS) */}
        <RaceResults />

        {/* 4. Race Schedule & Technical Regulations */}
        <TechnicalRegulationsModal />

        {/* 5. Route Profile & Interactive Altimetry */}
        <RouteElevation />

        {/* 6. Competition Categories & Prizes */}
        <PricingCategories />

        {/* 8. Finish Line Concert (Armadura) & Sponsors */}
        <ConcertAndSponsors />

        {/* 9. FAQs & Direct Contact */}
        <RulesAndContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
