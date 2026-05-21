import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
