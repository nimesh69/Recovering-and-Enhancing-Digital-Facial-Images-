import React from 'react';
import { LogIn, LucideMessagesSquare} from 'lucide-react';
import { Link } from './Link';

export function NavButtons() {
  return (
    <div className="flex items-center gap-6">
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/OurWork">Our Work</Link>
        <Link href="/Aboutus">About us</Link>
      </nav>
      <Link href="/login" className="p-2 hover:bg-gray-100 rounded-full">
        <LogIn className="w-4 h-4 ml-2" />
      </Link>
      <Link href="/Contactus" className="p-2 hover:bg-gray-100 rounded-full">
        <LucideMessagesSquare className="w-5 h-5" />
      </Link>
    </div>
  );
}