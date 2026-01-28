/*
 * DESIGN: Premium Blue & White
 * - Minimal centered footer
 * - Logo and copyright only
 */

export default function Footer() {
  return (
    <footer className="relative py-8 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.005_250)]" />
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <img 
            src="/images/pacific-hot-rod-logo.c6d4e547.webp" 
            alt="Pacific Hot Rod" 
            className="h-10 md:h-14 w-auto mb-4"
          />
          
          {/* Copyright */}
          <p className="text-sm md:text-base text-foreground/50">
            © 2026 Pacific Hot Rod. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
