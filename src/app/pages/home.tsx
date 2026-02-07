import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Building2, Sparkles, Instagram } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762430815620-fcca603c240c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwc2hvd3xlbnwxfHx8fDE3NjkyMzE3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fashion runway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0B0B0F]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Fashion Meets <br />
            <span className="bg-gradient-to-r from-[#FF2F92] via-[#7B61FF] to-[#00E5FF] bg-clip-text text-transparent">
              Talent & Nightlife
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            A digital-first fashion media platform connecting creators, brands, and fashion lovers worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/talent"
              className="px-8 py-4 rounded-[10px] bg-[#FF2F92] hover:bg-[#FF2F92]/90 transition-all shadow-[0_0_40px_rgba(255,47,146,0.4)] hover:shadow-[0_0_60px_rgba(255,47,146,0.6)]"
            >
              Join as Talent
            </Link>
            <Link
              to="/brands"
              className="px-8 py-4 rounded-[10px] bg-[#7B61FF] hover:bg-[#7B61FF]/90 transition-all shadow-[0_0_40px_rgba(123,97,255,0.4)] hover:shadow-[0_0_60px_rgba(123,97,255,0.6)]"
            >
              Join as Brand
            </Link>
            <Link
              to="/community"
              className="px-8 py-4 rounded-[10px] bg-[#00E5FF] text-[#0B0B0F] hover:bg-[#00E5FF]/90 transition-all shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:shadow-[0_0_60px_rgba(0,229,255,0.6)]"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 md:py-32 bg-[#0B0B0F]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-[14px] bg-gradient-to-b from-[#1a1a20] to-[#0B0B0F] border border-white/10 shadow-[0_0_30px_rgba(255,47,146,0.1)] hover:shadow-[0_0_50px_rgba(255,47,146,0.2)] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#FF2F92]/20 flex items-center justify-center mb-6">
                <Users size={28} className="text-[#FF2F92]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Discover Talent</h3>
              <p className="text-white/70">
                Connect with emerging designers, models, and creatives from around the world.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-[14px] bg-gradient-to-b from-[#1a1a20] to-[#0B0B0F] border border-white/10 shadow-[0_0_30px_rgba(123,97,255,0.1)] hover:shadow-[0_0_50px_rgba(123,97,255,0.2)] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#7B61FF]/20 flex items-center justify-center mb-6">
                <Building2 size={28} className="text-[#7B61FF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaborate with Brands</h3>
              <p className="text-white/70">
                Partner with innovative brands and expand your creative opportunities.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-[14px] bg-gradient-to-b from-[#1a1a20] to-[#0B0B0F] border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.1)] hover:shadow-[0_0_50px_rgba(0,229,255,0.2)] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#00E5FF]/20 flex items-center justify-center mb-6">
                <Sparkles size={28} className="text-[#00E5FF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Build Your Fashion Identity</h3>
              <p className="text-white/70">
                Join a vibrant community and showcase your unique style to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#0B0B0F] to-[#1a1a20]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-xl text-white/70 mb-6">Follow us on Instagram for daily fashion inspiration</p>

          {/* Community Gallery Grid (plain images) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            <div className="rounded-[8px] overflow-hidden h-64 md:h-72 bg-gray-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" alt="Runway Talent" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-[8px] overflow-hidden h-64 md:h-72 bg-gray-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1595777712802-5b02bfc3ee50?w=400&h=400&fit=crop" alt="Rising Voices" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-[8px] overflow-hidden h-64 md:h-72 bg-gray-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=400&fit=crop" alt="Signature Live" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-[8px] overflow-hidden h-64 md:h-72 bg-gray-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1441986300352-c5ad7f72a742?w=400&h=400&fit=crop" alt="Brand Connect" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-[8px] overflow-hidden h-64 md:h-72 bg-gray-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1556821552-5b0d5ce7e5a5?w=400&h=400&fit=crop" alt="Talent Scouting" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-[8px] overflow-hidden h-64 md:h-72 bg-gray-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop" alt="Creative Experience" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Curated Experiences Section (required) */}
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-[1200px] px-6 md:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Our Curated Experiences</h2>
              <p className="text-lg text-white/70 mb-8">Crafted at the intersection of fashion, talent, and culture.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Service 1 */}
                <Link to="/community" className="block group">
                  <div className="relative rounded-[10px] overflow-hidden h-80 md:h-88 shadow-lg">
                    <motion.img 
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop" 
                      alt="Runway Talent Curation" 
                      className="w-full h-full object-cover cursor-pointer"
                      initial={{ scale: 1, x: 0 }}
                      whileHover={{ 
                        scale: 0.95,
                        x: [-10, 10, -10, 10, 0],
                        transition: {
                          x: {
                            repeat: Infinity,
                            duration: 0.2,
                            ease: "easeInOut",
                          },
                          scale: {
                            repeat: 0,
                            duration: 0.3,
                            ease: "easeOut",
                          }
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl md:text-2xl font-light tracking-wide text-white group-hover:text-[#FF2F92] transition-colors">Runway Talent Curation</h3>
                      <p className="text-sm text-white/80 mt-2">Precision casting for fashion-forward brands.</p>
                    </div>
                  </div>
                </Link>

                {/* Service 2 */}
                <Link to="/community" className="block group">
                  <div className="relative rounded-[10px] overflow-hidden h-80 md:h-88 shadow-lg">
                    <motion.img 
                      src="https://images.unsplash.com/photo-1595777712802-5b02bfc3ee50?w=500&h=500&fit=crop" 
                      alt="Rising Voices Platform" 
                      className="w-full h-full object-cover cursor-pointer"
                      initial={{ scale: 1, x: 0 }}
                      whileHover={{ 
                        scale: 0.95,
                        x: [-10, 10, -10, 10, 0],
                        transition: {
                          x: {
                            repeat: Infinity,
                            duration: 0.2,
                            ease: "easeInOut",
                          },
                          scale: {
                            repeat: 0,
                            duration: 0.3,
                            ease: "easeOut",
                          }
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl md:text-2xl font-light tracking-wide text-white group-hover:text-[#FF2F92] transition-colors">Rising Voices Platform</h3>
                      <p className="text-sm text-white/80 mt-2">Where emerging artists rise.</p>
                    </div>
                  </div>
                </Link>

                {/* Service 3 */}
                <Link to="/community" className="block group">
                  <div className="relative rounded-[10px] overflow-hidden h-80 md:h-88 shadow-lg">
                    <motion.img 
                      src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop" 
                      alt="Signature Live Experiences" 
                      className="w-full h-full object-cover cursor-pointer"
                      initial={{ scale: 1, x: 0 }}
                      whileHover={{ 
                        scale: 0.95,
                        x: [-10, 10, -10, 10, 0],
                        transition: {
                          x: {
                            repeat: Infinity,
                            duration: 0.2,
                            ease: "easeInOut",
                          },
                          scale: {
                            repeat: 0,
                            duration: 0.3,
                            ease: "easeOut",
                          }
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl md:text-2xl font-light tracking-wide text-white group-hover:text-[#FF2F92] transition-colors">Signature Live Experiences</h3>
                      <p className="text-sm text-white/80 mt-2">Curated moments. Elevated impact.</p>
                    </div>
                  </div>
                </Link>

                {/* Service 4 */}
                <Link to="/community" className="block group">
                  <div className="relative rounded-[10px] overflow-hidden h-80 md:h-88 shadow-lg">
                    <motion.img 
                      src="https://images.unsplash.com/photo-1441986300352-c5ad7f72a742?w=500&h=500&fit=crop" 
                      alt="Brand Connect Studio" 
                      className="w-full h-full object-cover cursor-pointer"
                      initial={{ scale: 1, x: 0 }}
                      whileHover={{ 
                        scale: 0.95,
                        x: [-10, 10, -10, 10, 0],
                        transition: {
                          x: {
                            repeat: Infinity,
                            duration: 0.2,
                            ease: "easeInOut",
                          },
                          scale: {
                            repeat: 0,
                            duration: 0.3,
                            ease: "easeOut",
                          }
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl md:text-2xl font-light tracking-wide text-white group-hover:text-[#FF2F92] transition-colors">Brand Connect Studio</h3>
                      <p className="text-sm text-white/80 mt-2">Strategic collaborations that matter.</p>
                    </div>
                  </div>
                </Link>

                {/* Service 5 */}
                <Link to="/community" className="block group">
                  <div className="relative rounded-[10px] overflow-hidden h-80 md:h-88 shadow-lg">
                    <motion.img 
                      src="https://images.unsplash.com/photo-1556821552-5b0d5ce7e5a5?w=500&h=500&fit=crop" 
                      alt="Talent Scouting & Discovery" 
                      className="w-full h-full object-cover cursor-pointer"
                      initial={{ scale: 1, x: 0 }}
                      whileHover={{ 
                        scale: 0.95,
                        x: [-10, 10, -10, 10, 0],
                        transition: {
                          x: {
                            repeat: Infinity,
                            duration: 0.2,
                            ease: "easeInOut",
                          },
                          scale: {
                            repeat: 0,
                            duration: 0.3,
                            ease: "easeOut",
                          }
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl md:text-2xl font-light tracking-wide text-white group-hover:text-[#FF2F92] transition-colors">Talent Scouting & Discovery</h3>
                      <p className="text-sm text-white/80 mt-2">Unearthing the next generation of sound.</p>
                    </div>
                  </div>
                </Link>

                {/* Service 6 */}
                <Link to="/community" className="block group">
                  <div className="relative rounded-[10px] overflow-hidden h-80 md:h-88 shadow-lg">
                    <motion.img 
                      src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop" 
                      alt="Creative Experience Management" 
                      className="w-full h-full object-cover cursor-pointer"
                      initial={{ scale: 1, x: 0 }}
                      whileHover={{ 
                        scale: 0.95,
                        x: [-10, 10, -10, 10, 0],
                        transition: {
                          x: {
                            repeat: Infinity,
                            duration: 0.2,
                            ease: "easeInOut",
                          },
                          scale: {
                            repeat: 0,
                            duration: 0.3,
                            ease: "easeOut",
                          }
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl md:text-2xl font-light tracking-wide text-white group-hover:text-[#FF2F92] transition-colors">Creative Experience Management</h3>
                      <p className="text-sm text-white/80 mt-2">Designing experiences that leave a mark.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>


        </div>
      </section>
    </div>
  );
}
