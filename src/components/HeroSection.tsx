import React, { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { ChevronRight, Zap, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  const handleCtaClick = (e: React.MouseEvent) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Create multiple particle burst effects for a more impressive animation
    const createBurst = (x: number, y: number, size: number, delay: number) => {
      setTimeout(() => {
        const burst = document.createElement('div');
        burst.className = 'particle-burst';
        burst.style.left = `${x}px`;
        burst.style.top = `${y}px`;
        burst.style.width = `${size}px`;
        burst.style.height = `${size}px`;
        document.body.appendChild(burst);

        // Remove the burst element after animation completes
        setTimeout(() => {
          if (burst && burst.parentNode) {
            burst.parentNode.removeChild(burst);
          }
        }, 800);
      }, delay);
    };

    // Create main burst at click position
    createBurst(e.clientX, e.clientY, 100, 0);

    // Create additional bursts with different sizes and delays for a more dynamic effect
    createBurst(e.clientX - 20, e.clientY + 20, 80, 100);
    createBurst(e.clientX + 30, e.clientY - 15, 60, 200);
    createBurst(e.clientX + 10, e.clientY + 30, 70, 150);
    createBurst(e.clientX - 25, e.clientY - 25, 50, 250);

    // Create a flash overlay for a more dramatic effect
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.right = '0';
    flash.style.bottom = '0';
    flash.style.backgroundColor = 'white';
    flash.style.zIndex = '9999';
    flash.style.pointerEvents = 'none';
    flash.style.animation = 'flash-overlay 0.6s ease-out forwards';

    // Add a gradient background to the flash for a more magical effect
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      flash.style.background = 'radial-gradient(circle at ' + e.clientX + 'px ' + e.clientY + 'px, rgba(155, 135, 245, 0.8), rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.6) 70%)';
    } else {
      flash.style.background = 'radial-gradient(circle at center, rgba(155, 135, 245, 0.8), rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.6) 70%)';
    }
    document.body.appendChild(flash);

    // Remove the flash element after animation completes
    setTimeout(() => {
      if (flash && flash.parentNode) {
        flash.parentNode.removeChild(flash);
      }
    }, 600);

    // Add pulse animation to the button
    if (buttonRef.current) {
      buttonRef.current.classList.add('animate-cta-pulse');
    }

    // After button pulse, animate the hero section
    setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('animate-page-transition');
      }

      // Scroll to registration form with enhanced animation
      setTimeout(() => {
        const registrationForm = document.getElementById('registration-form');
        if (registrationForm) {
          // Add reveal animation to the form
          registrationForm.classList.add('animate-form-reveal');
          registrationForm.style.opacity = '0';

          // Scroll to the form
          registrationForm.scrollIntoView({
            behavior: 'smooth'
          });

          // Show the form with animation
          setTimeout(() => {
            registrationForm.style.opacity = '1';
            setIsAnimating(false);

            // Reset animations after completion
            setTimeout(() => {
              if (heroRef.current) {
                heroRef.current.classList.remove('animate-page-transition');
              }
              if (buttonRef.current) {
                buttonRef.current.classList.remove('animate-cta-pulse');
              }
              registrationForm.classList.remove('animate-form-reveal');
            }, 1000);
          }, 400);
        }
      }, 600);
    }, 400);
  };

  return <div ref={heroRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Enhanced animated background layer */}
      <div className="absolute inset-0 bg-sl-darkest z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NGgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>

      {/* Enhanced dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sl-darker/30 via-sl-darkest/80 to-sl-darkest z-0"></div>

      {/* Enhanced parallax particles effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Larger glowing orbs */}
        <div className="absolute w-64 h-64 rounded-full bg-sl-blue/5 blur-3xl animate-glow" style={{
        top: '15%',
        left: '5%'
      }}></div>
        <div className="absolute w-96 h-96 rounded-full bg-sl-purple/5 blur-3xl animate-glow" style={{
        bottom: '10%',
        right: '5%',
        animationDelay: '2s'
      }}></div>

        {/* Smaller floating particles */}
        <div className="absolute w-3 h-3 rounded-full bg-sl-blue/30 blur-sm animate-float-slow" style={{
        top: '20%',
        left: '20%'
      }}></div>
        <div className="absolute w-2 h-2 rounded-full bg-sl-purple/30 blur-sm animate-float-slow" style={{
        top: '45%',
        right: '25%',
        animationDelay: '1s'
      }}></div>
        <div className="absolute w-4 h-4 rounded-full bg-white/20 blur-sm animate-float-slow" style={{
        bottom: '30%',
        left: '40%',
        animationDelay: '1.5s'
      }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-sl-purple/30 blur-sm animate-float-slow" style={{
        top: '65%',
        right: '10%',
        animationDelay: '2.2s'
      }}></div>
        <div className="absolute w-2 h-2 rounded-full bg-sl-blue/30 blur-sm animate-float-slow" style={{
        bottom: '15%',
        left: '15%',
        animationDelay: '3s'
      }}></div>
      </div>

      {/* Magic circle under the silhouette */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 opacity-20 animate-spin-slow z-0">
        <div className="absolute inset-0 rounded-full border-4 border-sl-purple/30"></div>
        <div className="absolute inset-4 rounded-full border-2 border-sl-blue/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjE0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOWI4N2Y1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjIwLDEwIiBzdHJva2Utb3BhY2l0eT0iMC40Ii8+PHBhdGggZD0iTTE1MCwxMCBMMTUwLDI5MCBNMTAsMTUwIEwyOTAsMTUwIE01MCw1MCBMMjUwLDI1MCBNMjUwLDUwIE01MCwyNTAiIHN0cm9rZT0iIzFlYWVkYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] bg-no-repeat bg-center bg-contain"></div>
        </div>
      </div>

      {/* Central silhouette figure with enhanced magical aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-[28rem] z-0">
        {/* Background aura */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-60 bg-gradient-radial from-sl-purple/30 via-sl-blue/10 to-transparent rounded-full blur-2xl animate-pulse"></div>

        {/* Enhanced silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMzAwIiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTEwMCAxNWMyNSAwIDQ1IDE4IDQ1IDQwdjE1YzAgOCAxMCAxNSAyMCAxNXYxNWMtMTAgMC0yMCA3LTIwIDE1djE1YzAgMjItMjAgNDAtNDUgNDBzLTQ1LTE4LTQ1LTQwdi0xNWMwLTgtMTAtMTUtMjAtMTV2LTE1YzEwIDAgMjAtNyAyMC0xNXYtMTVjMC0yMiAyMC00MCA0NS00MHoiIG9wYWNpdHk9IjAuOSIvPjwvc3ZnPg==')] bg-no-repeat bg-contain bg-bottom opacity-40"></div>

        {/* Glowing accents on the silhouette */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-24 h-24 bg-sl-blue/20 blur-xl rounded-full animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
        <div className="absolute bottom-48 left-1/2 -translate-x-1/2 w-16 h-16 bg-sl-purple/30 blur-xl rounded-full animate-pulse" style={{
        animationDelay: '1.2s'
      }}></div>
      </div>

      {/* Content */}
      <div ref={contentRef} className={`relative z-10 container mx-auto px-4 py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="border-sl-purple/40 bg-sl-darkest/60 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wide font-medium text-sl-purple/90 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Infinity Club Flutter Bootcamp <Sparkles className="h-3.5 w-3.5" />
            </Badge>
          </div>

          {/* Main title with enhanced styling */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-sl-purple via-white to-sl-blue bg-clip-text text-transparent sl-purple-glow inline-block">Awaken Your</span>
            <br />
            <span className="bg-gradient-to-r from-sl-blue via-white to-sl-purple bg-clip-text text-transparent sl-blue-glow inline-block mt-2">Power</span>
          </h1>

          {/* Enhanced description with more impressive wording */}


          {/* Single, enhanced call-to-action button */}
          <div className="flex justify-center items-center mt-12">
            <Button
              ref={buttonRef}
              className="sl-button group text-base py-7 px-10 rounded-md transition-all duration-300 shadow-xl shadow-sl-purple/20 relative overflow-hidden"
              onClick={handleCtaClick}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5 text-white group-hover:text-yellow-100 transition-colors" />
                <span className="text-lg font-bold">Begin Your Ascension</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-sl-purple/80 to-sl-blue/80 group-hover:opacity-0 transition-opacity"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-sl-purple to-sl-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
          </div>

          {/* Subtle stats or features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto">
            <div className="bg-sl-darkest/50 backdrop-blur-sm border border-sl-purple/10 rounded-lg p-4 transition-all hover:border-sl-purple/30">
              <div className="text-xl font-bold text-white mb-1">5+ Projects</div>
              <div className="text-sm text-slate-400">Build real-world applications</div>
            </div>
            <div className="bg-sl-darkest/50 backdrop-blur-sm border border-sl-purple/10 rounded-lg p-4 transition-all hover:border-sl-purple/30">
              <div className="text-xl font-bold text-white mb-1">Professional Mentors</div>
              <div className="text-sm text-slate-400">Learn from industry professionals</div>
            </div>
            <div className="bg-sl-darkest/50 backdrop-blur-sm border border-sl-purple/10 rounded-lg p-4 transition-all hover:border-sl-purple/30">
              <div className="text-xl font-bold text-white mb-1">Career Ready</div>
              <div className="text-sm text-slate-400">Gain skills employers need</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge with enhanced glowing line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sl-purple/70 to-transparent z-10 shadow-[0_0_12px_2px_rgba(155,135,245,0.6)]"></div>

      {/* Flying particles */}
      <div className="absolute inset-0 z-0 particles">
        {Array.from({
        length: 8
      }).map((_, i) => <div key={i} className="particle" style={{
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 8 + 4}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5
      }}></div>)}
      </div>
    </div>;
};
export default HeroSection;