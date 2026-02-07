import { useState } from 'react';
import { Send, Heart, Calendar, Share2, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { AgeGroupAutocomplete } from '../components/AgeGroupAutocomplete';

// Fake community member data with images
const fakeCommunityData = [
  {
    id: 1,
    name: 'Sophie Miller',
    role: 'Fashion Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    bio: 'NYC Based | Style Blogger',
  },
  {
    id: 2,
    name: 'Alex Chen',
    role: 'Event Volunteer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    bio: 'Los Angeles | Event Organizer',
  },
  {
    id: 3,
    name: 'Maya Patel',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    bio: 'London | Fashion Blogger',
  },
  {
    id: 4,
    name: 'Jordan Davis',
    role: 'Community Moderator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    bio: 'Miami | Style Consultant',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Content Support',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
    bio: 'Chicago | Content Creator',
  },
  {
    id: 6,
    name: 'Marcus Johnson',
    role: 'Brand Ambassador',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    bio: 'Atlanta | Fashion Influencer',
  },
];

// Use relative URLs for Vercel API routes, absolute for local server
const getApiUrl = (endpoint: string) => {
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    return isLocalhost ? `http://localhost:5001${endpoint}` : endpoint;
  }
  return endpoint;
};

export function CommunityPage() {
  const [formData, setFormData] = useState({
    name: '',
    ageGroup: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    username: '',
    instagram: '',
    interests: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!formData.name || !formData.ageGroup || !formData.city || !formData.state || 
          !formData.email || !formData.phone || !formData.username || !formData.instagram) {
        toast.error('Please fill out all required fields.');
        return;
      }

      // Check if we're in local development
      const isLocalhost = typeof window !== 'undefined' && 
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
      
      if (isLocalhost) {
        // Test if backend is available
        try {
          const healthResponse = await fetch('http://localhost:5001/health', { 
            method: 'GET',
            mode: 'cors',
          });
          
          if (healthResponse.ok) {
            // Backend is available, use real API
            const response = await fetch(getApiUrl('/api/community-submit'), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
              toast.success(result.message || 'Welcome to the Fashion Nights community!');
              // Reset form
              setFormData({
                name: '',
                ageGroup: '',
                city: '',
                state: '',
                email: '',
                phone: '',
                username: '',
                instagram: '',
                interests: '',
                notes: '',
              });
            } else {
              toast.error(`Error: ${result.message}`);
            }
          } else {
            // Backend not healthy, fall back to mock
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Backend not available, using mock. Form data:', formData);
            toast.success('✅ Welcome to the Fashion Nights Community! Your profile has been created successfully. Check your email for confirmation.');
            
            // Reset form
            setFormData({
              name: '',
              ageGroup: '',
              city: '',
              state: '',
              email: '',
              phone: '',
              username: '',
              instagram: '',
              interests: '',
              notes: '',
            });
          }
        } catch (healthError) {
          // Backend not available, use mock
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('Backend unavailable, using mock. Form data:', formData);
          toast.success('✅ Welcome to the Fashion Nights Community! Your profile has been created successfully. Check your email for confirmation.');
          
          // Reset form
          setFormData({
            name: '',
            ageGroup: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            username: '',
            instagram: '',
            interests: '',
            notes: '',
          });
        }
      } else {
        // Production behavior - send to actual API
        const response = await fetch(getApiUrl('/api/community-submit'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          toast.success(result.message || 'Welcome to the Fashion Nights community!');
          // Reset form
          setFormData({
            name: '',
            ageGroup: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            username: '',
            instagram: '',
            interests: '',
            notes: '',
          });
        } else {
          toast.error(`Error: ${result.message}`);
        }
      }
    } catch (error) {
      console.error('Error submitting community form:', error);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleInterestChange = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest];
    
    setFormData({
      ...formData,
      interests: newInterests,
    });
  };

  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF2F92] bg-clip-text text-transparent">
              Fashion Nights
            </span>{' '}
            Community
          </h1>
          <p className="text-lg text-white/70 mb-8">
            Be part of fashion culture, media, and events.
          </p>
        </div>

        {/* Featured Community Members Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {fakeCommunityData.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-lg overflow-hidden bg-[#1A1A20] border border-cyan-400/20 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <div className="aspect-square overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-white font-semibold">{member.name}</p>
                    <p className="text-cyan-400 text-sm">{member.role}</p>
                    <p className="text-gray-300 text-xs mt-1">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Roles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-[14px] bg-gradient-to-br from-[#00E5FF]/20 to-[#00E5FF]/10 border border-[#00E5FF]/30 text-center">
            <Heart className="w-6 h-6 mx-auto mb-2 text-[#00E5FF]" />
            <p className="text-sm">Content Support</p>
          </div>
          <div className="p-4 rounded-[14px] bg-gradient-to-br from-[#00E5FF]/20 to-[#00E5FF]/10 border border-[#00E5FF]/30 text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-[#00E5FF]" />
            <p className="text-sm">Event Volunteers</p>
          </div>
          <div className="p-4 rounded-[14px] bg-gradient-to-br from-[#00E5FF]/20 to-[#00E5FF]/10 border border-[#00E5FF]/30 text-center">
            <Share2 className="w-6 h-6 mx-auto mb-2 text-[#00E5FF]" />
            <p className="text-sm">Media Promotion</p>
          </div>
          <div className="p-4 rounded-[14px] bg-gradient-to-br from-[#00E5FF]/20 to-[#00E5FF]/10 border border-[#00E5FF]/30 text-center">
            <MessageCircle className="w-6 h-6 mx-auto mb-2 text-[#00E5FF]" />
            <p className="text-sm">Moderation</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-8 rounded-[14px] bg-gradient-to-b from-[#1a1a20] to-[#0B0B0F] border border-white/10">
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2">
                Name <span className="text-[#00E5FF]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-colors"
              />
            </div>

            {/* Age Group */}
            <div className="mb-6">
              <label htmlFor="ageGroup" className="block mb-2">
                Age Group <span className="text-[#00E5FF]">*</span>
              </label>
              <AgeGroupAutocomplete
                id="ageGroup"
                name="ageGroup"
                value={formData.ageGroup}
                onChange={(value) =>
                  setFormData({ ...formData, ageGroup: value })
                }
                placeholder="Search or select age group"
                required
                accentColor="#00E5FF"
              />
            </div>

            {/* Location */}
            <div className="mb-6">
              <label className="block mb-2">
                Location <span className="text-[#00E5FF]">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  placeholder="State or Country"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Username */}
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2">
                Username <span className="text-[#00E5FF]">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Choose a unique username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-colors"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">
                  Phone <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Instagram Handle */}
            <div className="mb-6">
              <label htmlFor="instagram" className="block mb-2">
                Instagram Handle <span className="text-[#00E5FF]">*</span>
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                required
                placeholder="@your_instagram_handle"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-colors"
              />
            </div>

            {/* Interests */}
            <div className="mb-6">
              <label htmlFor="interests" className="block mb-2">
                Interests <span className="text-white/50">(Describe your areas of interest)</span>
              </label>
              <textarea
                id="interests"
                name="interests"
                rows={4}
                value={formData.interests}
                onChange={handleChange}
                placeholder="Describe your interests in fashion, design, or related topics..."
                className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Other Notes */}
            <div className="mb-6">
              <label htmlFor="notes" className="block mb-2">
                Other Notes <span className="text-white/50">(Optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us more about your interests..."
                className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 rounded-[10px] bg-[#00E5FF] text-[#0B0B0F] hover:bg-[#00E5FF]/90 transition-all shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:shadow-[0_0_60px_rgba(0,229,255,0.6)] flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Send size={20} />
              {isSubmitting ? 'Joining Community...' : 'Join the Community'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}