
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import RegistrationForm from '../components/RegistrationForm';

const Index = () => {
  // Initialize smooth scrolling behavior
  useEffect(() => {
    // Apply smooth scrolling CSS
    const applyScrollStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 768px) {
          html, body {
            overscroll-behavior-y: none;
            -webkit-overflow-scrolling: touch;
          }

          body {
            overflow-y: auto;
            -webkit-tap-highlight-color: transparent;
          }

          /* Ensure content doesn't cause horizontal overflow */
          #root, .min-h-screen {
            width: 100%;
            max-width: 100vw;
            overflow-x: hidden;
          }
        }
      `;
      document.head.appendChild(style);
    };

    applyScrollStyles();

    // Add event listeners for better scroll performance
    const addEventListeners = () => {
      const touchStartHandler = () => {};
      const touchMoveHandler = () => {};
      const wheelHandler = () => {};

      document.addEventListener('touchstart', touchStartHandler, { passive: true });
      document.addEventListener('touchmove', touchMoveHandler, { passive: true });
      document.addEventListener('wheel', wheelHandler, { passive: true });

      return () => {
        document.removeEventListener('touchstart', touchStartHandler);
        document.removeEventListener('touchmove', touchMoveHandler);
        document.removeEventListener('wheel', wheelHandler);
      };
    };

    return addEventListeners();
  }, []);

  return (
    <div className="min-h-screen py-0 px-0 relative">
      {/* Subtle animated background overlay */}
      <div className="absolute inset-0 z-[-1] opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sl-purple/5 to-sl-blue/5"></div>
      </div>

      <div className="w-full mx-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Registration form section with gradient transition */}
        <div className="relative bg-gradient-to-b from-sl-darkest/50 to-sl-darkest pt-32 pb-16 shadow-[0_-20px_40px_rgba(0,0,0,0.3)] mt-[-1px]">
          {/* Subtle pattern overlay for the form section */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NGgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>

          <div className="relative z-10">
            <div id="registration-form" className="max-w-4xl mx-auto px-4">
              {/* Section header to clearly identify the form area */}
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-sl-blue to-sl-purple bg-clip-text text-transparent">Join The Bootcamp</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-sl-purple/70 to-sl-blue/70 mx-auto rounded-full"></div>
              </div>

              <RegistrationForm />

              <footer className="mt-16 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Computer Science Club. All rights reserved.</p>
                <p className="mt-1">Contact us at <a href="mailto:csclub@university.edu" className="text-sl-purple hover:text-sl-blue transition-colors underline-offset-4 hover:underline">csclub@university.edu</a></p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
