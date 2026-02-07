import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-lg bg-[#0B0B0F]/80">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-[#FF2F92] to-[#7B61FF] bg-clip-text text-transparent">
            Creative Agency
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="transition-colors hover:text-[#FF2F92]">
              Home
            </Link>
            <Link to="/about" className="transition-colors hover:text-[#FF2F92]">
              About
            </Link>
            <Link to="/talent" className="transition-colors hover:text-[#FF2F92]">
              Talent
            </Link>
            <Link to="/brands" className="transition-colors hover:text-[#7B61FF]">
              Brands
            </Link>
            <Link to="/community" className="transition-colors hover:text-[#00E5FF]">
              Community
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-[#0B0B0F]/95 backdrop-blur-lg">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              to="/"
              className="py-2 transition-colors hover:text-[#FF2F92]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 transition-colors hover:text-[#FF2F92]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/talent"
              className="py-2 transition-colors hover:text-[#FF2F92]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Talent
            </Link>
            <Link
              to="/brands"
              className="py-2 transition-colors hover:text-[#7B61FF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Brands
            </Link>
            <Link
              to="/community"
              className="py-2 transition-colors hover:text-[#00E5FF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
