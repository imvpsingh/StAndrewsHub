import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { Toaster } from 'react-hot-toast';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right"
        toastOptions={{
          style: {
            background: '#112240',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          success: {
            iconTheme: {
              primary: '#D4AF37',
              secondary: '#112240',
            },
          },
        }} 
      />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
