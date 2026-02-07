import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { BrandCategoryAutocomplete } from '../components/BrandCategoryAutocomplete';

// Fake brand data with images
const fakeBrandsData = [
  {
    id: 1,
    name: 'Urban Fashion Co.',
    category: 'Streetwear',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Luxury Collections',
    category: 'Premium',
    image: 'https://images.unsplash.com/photo-1595777712802-5b02bfc3ee50?w=300&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Vintage Vibes',
    category: 'Retro',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=300&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Eco Wear',
    category: 'Sustainable',
    image: 'https://images.unsplash.com/photo-1441986300352-c5ad7f72a742?w=300&h=300&fit=crop',
  },
  {
    id: 5,
    name: 'Bold Designs',
    category: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1556821552-5b0d5ce7e5a5?w=300&h=300&fit=crop',
  },
  {
    id: 6,
    name: 'Minimalist Style',
    category: 'Modern',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop',
  },
];

// Use relative URLs for Vercel API routes, absolute for local server
const getApiUrl = (endpoint: string) => {
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    return isLocalhost ? `http://localhost:5000${endpoint}` : endpoint;
  }
  return endpoint;
};

export function BrandsPage() {
  const [formData, setFormData] = useState({
    brandName: '',
    contactPerson: '',
    email: '',
    phone: '',
    category: '',
    website: '',
    instagram: '',
    collaborationInterest: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data here
      if (!formData.brandName || !formData.contactPerson || !formData.email || !formData.phone || !formData.category) {
        toast.error('Please fill out all required fields.');
        return;
      }

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
            const apiResponse = await fetch(getApiUrl('/api/brand-submit'), {
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
                brandName: '',
                contactPerson: '',
                email: '',
                phone: '',
                category: '',
                website: '',
                instagram: '',
                collaborationInterest: '',
              });
            } else {
              toast.error(`Error: ${result.message}`);
            }
          } else {
            // Backend is not responding properly, fall back to mock
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form data would be sent to email service:', formData);
            toast.success('✅ Brand collaboration request sent successfully! We\'ll review your inquiry and contact you within 24 hours.');
            
            // Reset form
            setFormData({
              brandName: '',
              contactPerson: '',
              email: '',
              phone: '',
              category: '',
              website: '',
              instagram: '',
              collaborationInterest: '',
            });
          }
        } catch (healthError) {
          // Backend is not available, use mock
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('Backend unavailable, using mock. Error:', healthError);
          toast.success('✅ Brand collaboration request sent successfully! We\'ll review your inquiry and contact you within 24 hours.');
          
          // Reset form
          setFormData({
            brandName: '',
            contactPerson: '',
            email: '',
            phone: '',
            category: '',
            website: '',
            instagram: '',
            collaborationInterest: '',
          });
        }
      } else {
        // Production behavior - send to actual API
        const response = await fetch(getApiUrl('/api/brand-submit'), {
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
            brandName: '',
            contactPerson: '',
            email: '',
            phone: '',
            category: '',
            website: '',
            instagram: '',
            collaborationInterest: '',
          });
        } else {
          toast.error(`Error: ${result.message}`);
        }
      }
    } catch (error) {
      console.error('Error submitting brand form:', error);
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
            Partner With Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with talented individuals in the fashion industry for collaborations
          </p>
        </div>

        {/* Featured Brands Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Brands We Partner With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {fakeBrandsData.map((brand) => (
              <div
                key={brand.id}
                className="group relative rounded-lg overflow-hidden bg-[#1A1A20] border border-gray-800 hover:border-purple-600 transition-all hover:shadow-lg hover:shadow-purple-600/20"
              >
                <div className="aspect-square overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-white font-semibold">{brand.name}</p>
                    <p className="text-purple-400 text-sm">{brand.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A1A20] rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="brandName" className="block text-sm font-medium mb-2">
                  Brand Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="brandName"
                  name="brandName"
                  type="text"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="Enter your brand name"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium mb-2">
                  Contact Person <span className="text-red-500">*</span>
                </label>
                <input
                  id="contactPerson"
                  name="contactPerson"
                  type="text"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Your name"
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
                  placeholder="Business email address"
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
                  placeholder="Contact phone number"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <BrandCategoryAutocomplete
                  value={formData.category}
                  onChange={(value) => setFormData({...formData, category: value})}
                  placeholder="Select your brand category"
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
                  placeholder="https://your-brand-website.com"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                  Instagram
                </label>
                <input
                  id="instagram"
                  name="instagram"
                  type="text"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@your_brand"
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="collaborationInterest" className="block text-sm font-medium mb-2">
                  Collaboration Interest <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="collaborationInterest"
                  name="collaborationInterest"
                  value={formData.collaborationInterest}
                  onChange={handleChange}
                  placeholder="Describe the type of collaboration you're interested in..."
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0B0B0F] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
              </div>
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
                    Sending Your Inquiry...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Brand Inquiry
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