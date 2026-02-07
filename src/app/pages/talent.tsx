import { useState } from 'react';
import { Send, Star } from 'lucide-react';
import { toast } from 'sonner';
import { CategoryAutocomplete } from '../components/CategoryAutocomplete';

// Fake talent data with images
const fakeTalentData = [
  {
    id: 1,
    name: 'Emma Wilson',
    category: 'Fashion Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    location: 'New York',
  },
  {
    id: 2,
    name: 'David Kim',
    category: 'Photographer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    location: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Isabella Garcia',
    category: 'Makeup Artist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    location: 'Miami',
  },
  {
    id: 4,
    name: 'James Chen',
    category: 'Stylist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    location: 'San Francisco',
  },
  {
    id: 5,
    name: 'Rachel Brown',
    category: 'Model',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
    location: 'Chicago',
  },
  {
    id: 6,
    name: 'Marcus Lee',
    category: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop',
    location: 'Seattle',
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

export function TalentPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    category: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    instagram: '',
    website: '',
    portfolio: '',
    bio: '',
    dateOfBirth: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Check if we're in local development without backend
      const isLocalhost = typeof window !== 'undefined' && 
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
      
      if (isLocalhost) {
        // Test if backend is available before using mock
        try {
          const response = await fetch('http://localhost:5001/health');
          const healthData = await response.json();
          
          if (healthData.status === 'OK') {
            // Backend is available, use real API
            const apiResponse = await fetch(getApiUrl('/api/talent-submit'), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });

            const result = await apiResponse.json();

            if (apiResponse.ok) {
              toast.success(result.message);
              // Reset form
              setFormData({
                fullName: '',
                category: '',
                city: '',
                state: '',
                email: '',
                phone: '',
                instagram: '',
                website: '',
                portfolio: '',
                bio: '',
                dateOfBirth: '',
              });
            } else {
              toast.error(`Error: ${result.message}`);
            }
          } else {
            // Backend is not responding properly, fall back to mock
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form data would be sent to email service:', formData);
            toast.success('✅ Talent profile submitted successfully! You\'ll receive a welcome email shortly with next steps.');
            
            // Reset form
            setFormData({
              fullName: '',
              category: '',
              city: '',
              state: '',
              email: '',
              phone: '',
              instagram: '',
              website: '',
              portfolio: '',
              bio: '',
              dateOfBirth: '',
            });
          }
        } catch (healthError) {
          // Backend is not available, use mock
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('Backend unavailable, using mock. Error:', healthError);
          toast.success('✅ Talent profile submitted successfully! You\'ll receive a welcome email shortly with next steps.');
          
          
          // Reset form
          setFormData({
            fullName: '',
            category: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            instagram: '',
            website: '',
            portfolio: '',
            bio: '',
            dateOfBirth: '',
          });
        }
      } else {
        // Production behavior - send to actual API
        const response = await fetch(getApiUrl('/api/talent-submit'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          toast.success(result.message);
          // Reset form
          setFormData({
            fullName: '',
            category: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            instagram: '',
            website: '',
            portfolio: '',
            bio: '',
            dateOfBirth: '',
          });
        } else {
          toast.error(`Error: ${result.message}`);
        }
      }
    } catch (error) {
      console.error('Error submitting talent form:', error);
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

  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Showcase Your{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF2F92] bg-clip-text text-transparent">
              Talent
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join our platform and connect with fashion enthusiasts, brands, and opportunities.
          </p>
        </div>

        {/* Featured Talents Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Talents</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {fakeTalentData.map((talent) => (
              <div
                key={talent.id}
                className="group relative rounded-lg overflow-hidden bg-[#1A1A20] border border-gray-800 hover:border-purple-600 transition-all hover:shadow-lg hover:shadow-purple-600/20"
              >
                <div className="aspect-square overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img
                    src={talent.image}
                    alt={talent.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <div className="flex items-center gap-2">
                      <p className="text-white font-semibold flex-1">{talent.name}</p>
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    </div>
                    <p className="text-purple-400 text-sm">{talent.category}</p>
                    <p className="text-gray-300 text-xs mt-1">{talent.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A1A20] rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <CategoryAutocomplete
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={(value) => setFormData({...formData, category: value})}
                  placeholder="Search or select a category"
                  required
                  accentColor="#00E5FF"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State or Country"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-2">
                  Date of Birth
                </label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                  Instagram Handle
                </label>
                <input
                  id="instagram"
                  name="instagram"
                  type="text"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@your_instagram_handle"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium mb-2">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                  Portfolio Link
                </label>
                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://yourportfolio.com"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="bio" className="block text-sm font-medium mb-2">
                Bio <span className="text-red-500">*</span>
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself, your experience, and your goals..."
                rows={6}
                className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#FF2F92] text-white font-semibold flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 transition-all'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Send size={20} className="animate-pulse" />
                    Submitting Your Profile...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Talent Profile
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}