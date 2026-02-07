import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Target, Eye, Users } from 'lucide-react';

export function AboutPage() {
  const audienceTags = [
    'Designers',
    'Models',
    'Performers',
    'Artists',
    'Influencers',
    'Brands',
    'Fashion Enthusiasts',
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-32 md:py-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-transparent to-[#0B0B0F]"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768766997814-d9a0b2071fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbmlnaHRsaWZlJTIwcGFydHl8ZW58MXx8fHwxNzY5MjMzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fashion nightlife"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Creative Agency{' '}
            <span className="bg-gradient-to-r from-[#FF2F92] to-[#7B61FF] bg-clip-text text-transparent">
              Platform
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            A modern SaaS platform for creative businesses and talent management.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-32 bg-[#0B0B0F]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FF2F92]/20 flex items-center justify-center">
                  <Target size={24} className="text-[#FF2F92]" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-white/80 mb-8">
                To create a global, inclusive fashion community powered by creativity and collaboration.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#7B61FF]/20 flex items-center justify-center">
                  <Eye size={24} className="text-[#7B61FF]" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-white/80">
                To become a leading digital fashion media brand connecting talent and opportunity.
              </p>
            </div>

            {/* Visual */}
            <div className="relative h-96 rounded-[14px] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617265150993-99f4c0ab8298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzY5MjMzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fashion designer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0B0B0F] to-[#1a1a20]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#00E5FF]/20 flex items-center justify-center">
                <Users size={24} className="text-[#00E5FF]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Who It's For</h2>
            </div>
            <p className="text-lg text-white/80">
              Creative Agency is built for everyone who loves creating and collaborating
            </p>
          </div>

          {/* Audience Tags Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {audienceTags.map((tag, index) => {
              const colors = [
                'from-[#FF2F92]/20 to-[#FF2F92]/10 border-[#FF2F92]/30',
                'from-[#7B61FF]/20 to-[#7B61FF]/10 border-[#7B61FF]/30',
                'from-[#00E5FF]/20 to-[#00E5FF]/10 border-[#00E5FF]/30',
              ];
              const colorClass = colors[index % 3];

              return (
                <div
                  key={tag}
                  className={`p-6 rounded-[14px] bg-gradient-to-br ${colorClass} border text-center transition-transform hover:scale-105`}
                >
                  <p className="font-semibold">{tag}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
