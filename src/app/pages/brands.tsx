import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { BrandCategoryAutocomplete } from '../components/BrandCategoryAutocomplete';

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
            toast.success('Form submitted successfully! (Local simulation - would send email in production)');
            
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
          toast.success('Form submitted successfully! (Local simulation - would send email in production)');
          
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner With Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with talented individuals in the fashion industry for collaborations
          </p>
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
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                <Send size={20} />
                {isSubmitting ? 'Submitting...' : 'Submit Brand Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}