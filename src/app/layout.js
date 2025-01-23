import Header from '@/components/Header';
import { AuthProvider } from '@/provider/AuthProvider';
import './globals.css';

export const metadata = {
  title: 'Blog Viewer',
  description: 'A simple blog viewer application',
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider
    >
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
