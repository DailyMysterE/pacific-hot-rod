/*
 * DESIGN: Industrial Heritage Aesthetic
 * 404 Page - Maintains brand consistency
 */

import { Link } from 'wouter';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/p-logo.png"
            alt="Pacific Hot Rod"
            className="h-16 w-auto mx-auto mb-12"
          />
        </Link>

        {/* 404 Number */}
        <div className="font-display text-8xl md:text-9xl text-primary mb-4">404</div>
        
        {/* Message */}
        <h1 className="font-display text-2xl md:text-3xl mb-4">PAGE NOT FOUND</h1>
        <p className="text-foreground/60 max-w-md mx-auto mb-8">
          Looks like this page took a wrong turn. Let's get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="font-display text-sm tracking-wider bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="font-display text-sm tracking-wider border border-border text-foreground px-6 py-3 hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>GO BACK</span>
          </button>
        </div>
      </div>
    </div>
  );
}
