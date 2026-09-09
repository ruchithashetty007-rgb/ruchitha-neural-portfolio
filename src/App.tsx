import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneyData } from './components/JourneyData';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { LearningLab } from './components/LearningLab';
import { Terminal } from './components/Terminal';
import { VersionRoadmap } from './components/VersionRoadmap';
import { CareerVision } from './components/CareerVision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isFinePointer, setIsFinePointer] = useState<boolean>(false);

  useEffect(() => {
    // Check if device supports fine cursor (desktop/mouse)
    const media = window.matchMedia('(pointer: fine)');
    setIsFinePointer(media.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (media.matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-body relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Subtle cursor follower glow on desktop only */}
      {isFinePointer && (
        <div
          className="pointer-events-none fixed w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out z-30"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* Floating Modern Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Section 4, 5, 6: Hero, Digital Mind, Live Identity Card */}
        <Hero />

        {/* Section 7: My Journey as Data */}
        <JourneyData />

        {/* Section 8: Behind the Code (About Me) */}
        <About />

        {/* Section 9: My Current Toolkit (Honest Skill Map) */}
        <Skills />

        {/* Section 10 & 11: Things I've Built (Cinematic Projects & Case Studies) */}
        <Projects />

        {/* Section 12: Learning Milestones (Certificates) */}
        <Certificates />

        {/* Section 13: My Learning Lab */}
        <LearningLab />

        {/* Section 14: Ruchitha Interactive Terminal */}
        <Terminal />

        {/* Section 15: This is Version 2.0 of My Journey */}
        <VersionRoadmap />

        {/* Section 16: Where I'm Heading (Career Vision Pipeline) */}
        <CareerVision />

        {/* Section 17: Let's Connect (Contact) */}
        <Contact />
      </main>

      {/* Section 20 & 27: Footer */}
      <Footer />
    </div>
  );
}
