import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import { HomePage } from '@/app/pages/home';
import { AboutPage } from '@/app/pages/about';
import { TalentPage } from '@/app/pages/talent';
import { BrandsPage } from '@/app/pages/brands';
import { CommunityPage } from '@/app/pages/community';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0B0F] text-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/talent" element={<TalentPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a20',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
      </div>
    </Router>
  );
}
