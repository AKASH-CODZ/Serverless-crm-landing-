import { Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0B0B0F]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Brand Name */}
          <div className="text-2xl font-bold bg-gradient-to-r from-[#FF2F92] to-[#7B61FF] bg-clip-text text-transparent">
            Creative Agency
          </div>

          {/* Social Icon */}
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-[#FF2F92] transition-colors"
            >
              <Instagram size={24} />
              <span className="text-sm">Follow Us</span>
            </a>
            <a
              href="mailto:contact@demo-agency.com"
              className="flex items-center gap-2 text-white/70 hover:text-[#00E5FF] transition-colors"
            >
              <Mail size={24} />
              <span className="text-sm">Contact</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Creative Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
